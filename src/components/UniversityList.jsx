// src/components/UniversityList.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const UniversityList = ({ onCompareSelected }) => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  // Filter states
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [degreeFilter, setDegreeFilter] = useState("All Degrees");
  const [minBudget, setMinBudget] = useState("");
  const [maxBudget, setMaxBudget] = useState("");

  // Fetch all universities once on mount
  useEffect(() => {
    fetch("http://localhost:5000/universities")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setUniversities(data);
        setFilteredUniversities(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Apply all filters whenever any filter changes
  useEffect(() => {
    let filtered = [...universities];

    // Country Filter
    if (countryFilter !== "All Countries") {
      filtered = filtered.filter((uni) => uni.country === countryFilter);
    }

    // Degree Level Filter - এখানে সঠিক ম্যাপিং করা হয়েছে
    if (degreeFilter !== "All Degrees") {
      let targetDegree;
      if (degreeFilter === "Bachelor's") targetDegree = "Bachelor";
      else if (degreeFilter === "Master's") targetDegree = "Master";
      else if (degreeFilter === "PhD") targetDegree = "PhD";

      if (targetDegree) {
        filtered = filtered.filter((uni) => uni.degree_level === targetDegree);
      }
    }

    // Budget Filter (Min & Max)
    if (minBudget !== "") {
      filtered = filtered.filter((uni) => uni.tuition_fee >= Number(minBudget));
    }
    if (maxBudget !== "") {
      filtered = filtered.filter((uni) => uni.tuition_fee <= Number(maxBudget));
    }

    setFilteredUniversities(filtered);
  }, [universities, countryFilter, degreeFilter, minBudget, maxBudget]);

  // Compare functionality
  const toggleCompare = (id) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter((sid) => sid !== id));
    } else {
      if (selectedForCompare.length < 3) {
        setSelectedForCompare([...selectedForCompare, id]);
      } else {
        alert("You can compare maximum 3 universities!");
      }
    }
  };

  useEffect(() => {
    onCompareSelected(selectedForCompare);
  }, [selectedForCompare, onCompareSelected]);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
        <p className="mt-4 text-xl text-gray-600">Loading universities...</p>
      </div>
    );
  }

  return (
    <section id="universities" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Quick Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto mb-24 px-6"
          id="search"
        >
          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>

            <div className="relative p-10 md:p-12">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
                Find Your{" "}
                <span className="bg-[#BB8ED0] bg-clip-text text-transparent">
                  Perfect University
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Country */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    🌍 Destination Country
                  </label>
                  <select
                    value={countryFilter}
                    onChange={(e) => setCountryFilter(e.target.value)}
                    className="w-full px-6 py-5 text-lg bg-white/60 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <option>All Countries</option>
                    <option>USA</option>
                    <option>UK</option>
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Germany</option>
                  </select>
                </div>

                {/* Degree Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    🎓 Degree Level
                  </label>
                  <select
                    value={degreeFilter}
                    onChange={(e) => setDegreeFilter(e.target.value)}
                    className="w-full px-6 py-5 text-lg bg-white/60 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <option>All Degrees</option>
                    <option>Bachelor's</option>
                    <option>Master's</option>
                    <option>PhD</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    💰 Budget (Tuition Fee per year)
                  </label>
                  <div className="flex gap-3">
                    <input
                      type="number"
                      placeholder="Min ($)"
                      value={minBudget}
                      onChange={(e) => setMinBudget(e.target.value)}
                      className="w-full px-4 py-4 text-lg bg-white/60 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                    <input
                      type="number"
                      placeholder="Max ($)"
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      className="w-full px-4 py-4 text-lg bg-white/60 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                    />
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => document.getElementById("university-grid")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-4 px-12 py-6 text-2xl font-bold text-white bg-[#3e8fae] rounded-2xl hover:bg-transparent hover:text-[#3291B6] border-2 border-[#3291B6] transition-all duration-300"
                >
                  Show Results →
                </button>
              </div>

              <p className="text-center text-gray-600 mt-8">
                100% Free • Compare & Apply Easily
              </p>
            </div>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-purple-400/20 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Results Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#3291B6]">
          Available Universities ({filteredUniversities.length})
        </h2>

        {/* University Grid */}
        <div id="university-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredUniversities.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <p className="text-2xl text-gray-600">No universities found matching your criteria.</p>
            </div>
          ) : (
            filteredUniversities.map((uni, index) => (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                {/* Logo Section */}
                <div className="h-56 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  {uni.logo_url ? (
                    <img
                      src={uni.logo_url}
                      alt={uni.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                        <span className="text-4xl font-bold text-blue-600">
                          {uni.name
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .slice(0, 2)
                            .toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    <span className="font-semibold">{uni.city}</span>, {uni.country}
                  </p>

                  <div className="space-y-4 text-base mb-8">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Degree Level</span>
                      <span className="font-bold text-[#3291B6] capitalize">
                        {uni.degree_level + (uni.degree_level === "Bachelor" || uni.degree_level === "Master" ? "'s" : "")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-bold text-[#BB8ED0]">
                        ${uni.tuition_fee.toLocaleString()}/year
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Required GPA</span>
                      <span className="font-semibold">{uni.required_gpa}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Required IELTS</span>
                      <span className="font-semibold">{uni.required_ielts}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">World Ranking</span>
                      <span className="font-bold text-purple-600">#{uni.ranking}</span>
                    </div>
                  </div>

                  <div className="mb-6 flex items-center">
                    <input
                      type="checkbox"
                      id={`compare-${uni.id}`}
                      checked={selectedForCompare.includes(uni.id)}
                      onChange={() => toggleCompare(uni.id)}
                      className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <label
                      htmlFor={`compare-${uni.id}`}
                      className="ml-3 text-lg font-medium text-gray-700 cursor-pointer"
                    >
                      Add to Compare ({selectedForCompare.length}/3)
                    </label>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 bg-[#3291B6] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 hover:bg-transparent hover:text-[#3291B6] border-2 border-[#3291B6] transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default UniversityList;