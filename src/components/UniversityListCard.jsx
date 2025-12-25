import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";

const UniversityListCard = ({ onCompareSelected }) => {
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  // Filters
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [degreeFilter, setDegreeFilter] = useState("All Degrees");
  const [feeRange, setFeeRange] = useState([0, 50000]);
  const [userGPA, setUserGPA] = useState("");
  const [userIELTS, setUserIELTS] = useState("");

  // 🔥 Debounced fetch (SAFE way)
  const debouncedFetch = useRef(
    debounce((params) => {
      fetch(`http://localhost:5000/universities/filter?${params}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredUniversities(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 300)
  ).current;

  // Fetch on filter change
  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();
    if (countryFilter !== "All Countries") params.append("country", countryFilter);
    if (degreeFilter !== "All Degrees") params.append("degree_level", degreeFilter);
    params.append("min_fee", feeRange[0]);
    params.append("max_fee", feeRange[1]);
    if (userGPA) params.append("user_gpa", userGPA);
    if (userIELTS) params.append("user_ielts", userIELTS);

    debouncedFetch(params);

    return () => {
      debouncedFetch.cancel(); // 🧹 cleanup
    };
  }, [countryFilter, degreeFilter, feeRange, userGPA, userIELTS, debouncedFetch]);

  // Compare toggle
  const toggleCompare = (id) => {
    setSelectedForCompare((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  // Send compare list to parent
  useEffect(() => {
    onCompareSelected?.(selectedForCompare);
  }, [selectedForCompare, onCompareSelected]);

  // Eligibility logic
  const isEligible = (uni) => {
    if (!userGPA && !userIELTS) return null;

    const gpaOk =
      !userGPA || Number(userGPA) >= (uni.required_gpa ?? 0);
    const ieltsOk =
      !userIELTS || Number(userIELTS) >= (uni.required_ielts ?? 0);

    return gpaOk && ieltsOk;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* FILTERS */}
        <motion.div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Tuition Fee */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-4">
                Tuition Fee: ${feeRange[0].toLocaleString()} - ${feeRange[1].toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="60000"
                step="1000"
                value={feeRange[1]}
                onChange={(e) =>
                  setFeeRange([feeRange[0], Number(e.target.value)])
                }
                className="w-full h-3 bg-gray-300 rounded-lg cursor-pointer"
              />
            </div>

            {/* GPA */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your GPA
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="4"
                value={userGPA}
                onChange={(e) => setUserGPA(e.target.value)}
                placeholder="e.g. 3.5"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>

            {/* IELTS */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">
                Your IELTS
              </label>
              <input
                type="number"
                step="0.5"
                min="0"
                max="9"
                value={userIELTS}
                onChange={(e) => setUserIELTS(e.target.value)}
                placeholder="e.g. 6.5"
                className="w-full px-4 py-3 border rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* RESULTS */}
        <h2 className="text-4xl font-bold text-[#3291B6] mb-8">
          {loading
            ? "Searching..."
            : `Found ${filteredUniversities.length} Universities`}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredUniversities.map((uni) => {
            const eligible = isEligible(uni);

            return (
              <motion.div
                key={uni.id}
                whileHover={{ y: -5 }}
                className="relative bg-white rounded-2xl shadow-xl p-6"
              >
                {/* Eligibility Badge */}
                {eligible !== null && (
                  <div
                    className={`absolute top-4 right-4 px-4 py-2 rounded-full text-white font-bold ${
                      eligible ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {eligible ? "✓ Eligible" : "✗ Not Eligible"}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                <p className="text-gray-600 mb-1">{uni.country}</p>
                <p className="text-gray-600 mb-1">
                  Tuition: ${uni.tuition_fee}
                </p>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => toggleCompare(uni.id)}
                    className="px-4 py-2 rounded-lg bg-blue-500 text-white"
                  >
                    Compare
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-green-600 text-white">
                    Apply
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniversityListCard;
