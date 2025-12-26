import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import debounce from "lodash.debounce";
import ApplyModel from "./ApplyModel";

const UniversityList = ({ onCompareSelected }) => {
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  // Filters
  const [countryFilter, setCountryFilter] = useState("All Countries");
  const [degreeFilter, setDegreeFilter] = useState("All Degrees");
  const [feeRange, setFeeRange] = useState([0, 60000]);
  const [userGPA, setUserGPA] = useState("");
  const [userIELTS, setUserIELTS] = useState("");

  // ✅ Correct ref usage
  const debouncedFetchRef = useRef(null);

  // ✅ Initialize debounce ONLY ONCE
  useEffect(() => {
    debouncedFetchRef.current = debounce((params) => {
      setLoading(true);

      fetch(`https://sumon.tahmied.com/universities/filter?${params}`)
        .then((res) => {
          if (!res.ok) throw new Error("Fetch failed");
          return res.json();
        })
        .then((data) => {
          setFilteredUniversities(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }, 350);

    return () => {
      debouncedFetchRef.current?.cancel();
    };
  }, []);

  // ✅ Call debounce when filters change
  useEffect(() => {
    if (!debouncedFetchRef.current) return;

    const params = new URLSearchParams();

    if (countryFilter !== "All Countries") {
      params.append("country", countryFilter);
    }

    if (degreeFilter !== "All Degrees") {
      // IMPORTANT: backend expects Bachelor / Master / PhD
      params.append(
        "degree_level",
        degreeFilter.replace("'s", "")
      );
    }

    params.append("min_fee", feeRange[0]);
    params.append("max_fee", feeRange[1]);

    if (userGPA) params.append("user_gpa", userGPA);
    if (userIELTS) params.append("user_ielts", userIELTS);

    debouncedFetchRef.current(params);
  }, [countryFilter, degreeFilter, feeRange, userGPA, userIELTS]);

  // Compare toggle
  const toggleCompare = (id) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((x) => x !== id);
      }
      if (prev.length >= 3) {
        alert("You can compare maximum 3 universities!");
        return prev;
      }
      return [...prev, id];
    });
  };

  useEffect(() => {
    onCompareSelected?.(selectedForCompare);
  }, [selectedForCompare, onCompareSelected]);

  // Eligibility badge
  const isEligible = (uni) => {
    if (!userGPA && !userIELTS) return null;

    const gpaOk = !userGPA || Number(userGPA) >= uni.required_gpa;
    const ieltsOk = !userIELTS || Number(userIELTS) >= uni.required_ielts;

    return gpaOk && ieltsOk;
  };

  if (loading && filteredUniversities.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto" />
        <p className="mt-4 text-xl text-gray-600">Loading universities...</p>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* FILTER BAR */}
        <div className="bg-white p-8 rounded-3xl shadow-xl mb-20">
          <h3 className="text-3xl font-bold text-center mb-10">
            Find Your <span className="text-purple-500">Perfect University</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Country */}
            <select
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="px-5 py-4 rounded-xl border"
            >
              <option>All Countries</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>Germany</option>
            </select>

            {/* Degree */}
            <select
              value={degreeFilter}
              onChange={(e) => setDegreeFilter(e.target.value)}
              className="px-5 py-4 rounded-xl border"
            >
              <option>All Degrees</option>
              <option>Bachelor's</option>
              <option>Master's</option>
              <option>PhD</option>
            </select>

            {/* Tuition */}
            <div>
              <label className="block text-sm mb-2">
                💰 ${feeRange[0]} – ${feeRange[1]}
              </label>
              <input
                type="range"
                min="0"
                max="60000"
                step="1000"
                value={feeRange[1]}
                onChange={(e) =>
                  setFeeRange([0, Number(e.target.value)])
                }
                className="w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Your GPA"
              step="0.1"
              value={userGPA}
              onChange={(e) => setUserGPA(e.target.value)}
              className="px-5 py-4 rounded-xl border"
            />

            <input
              type="number"
              placeholder="Your IELTS"
              step="0.5"
              value={userIELTS}
              onChange={(e) => setUserIELTS(e.target.value)}
              className="px-5 py-4 rounded-xl border"
            />
          </div>
        </div>

        {/* RESULTS */}
        <h2 className="text-4xl font-bold mb-12 text-blue-600">
          {loading
            ? "Searching..."
            : `Available Universities (${filteredUniversities.length})`}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredUniversities.map((uni, index) => {
            const eligible = isEligible(uni);

            return (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className= "relative  bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {eligible !== null && (
                  <div
                    className={`absolute top-4 right-4 px-4 py-1 rounded-full text-white ${
                      eligible ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {eligible ? "✓ Eligible" : "✗ Not Eligible"}
                  </div>
                )}

                <img
                  src={uni.logo_url}
                  alt={uni.name}
                  className="h-48 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{uni.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {uni.city}, {uni.country}
                  </p>

                  <p className="mb-2">🎓 {uni.degree_level}</p>
                  <p className="mb-2">💰 ${uni.tuition_fee}/year</p>
                  <p className="mb-2">📊 GPA: {uni.required_gpa}</p>
                  <p className="mb-4">🗣 IELTS: {uni.required_ielts}</p>

                  <div className="flex items-center mb-4">
                    <input
                      type="checkbox"
                      checked={selectedForCompare.includes(uni.id)}
                      onChange={() => toggleCompare(uni.id)}
                    />
                    <span className="ml-2">
                      Compare ({selectedForCompare.length}/3)
                    </span>
                  </div>

                  <ApplyModel university={uni} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UniversityList;
