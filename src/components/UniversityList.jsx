// src/components/UniversityList.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UniversityList = ({ onCompareSelected }) => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedForCompare, setSelectedForCompare] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/universities")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setUniversities(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const toggleCompare = (id) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter(sid => sid !== id));
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
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900">
          Available Universities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {universities.map((uni, index) => (
            <motion.div
              key={uni.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
            >
              {/* Logo Section */}
              <div className="h-56 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                {uni.logo_url ? (
                  <img src={uni.logo_url} alt={uni.name} className="h-40 object-contain" />
                ) : (
                  <div className="text-center">
                    <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto">
                      <span className="text-4xl font-bold text-blue-600">
                        {uni.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body - শুধু একটা p-8 */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                <p className="text-lg text-gray-600 mb-6">
                  <span className="font-semibold">{uni.city}</span>, {uni.country}
                </p>

                {/* Details */}
                <div className="space-y-4 text-base mb-8">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Degree Level</span>
                    <span className="font-bold text-blue-600 capitalize">{uni.degree_level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tuition Fee</span>
                    <span className="font-bold text-green-600">${uni.tuition_fee.toLocaleString()}/year</span>
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

                {/* Compare Checkbox */}
                <div className="mb-6 flex items-center">
                  <input
                    type="checkbox"
                    id={`compare-${uni.id}`}
                    checked={selectedForCompare.includes(uni.id)}
                    onChange={() => toggleCompare(uni.id)}
                    className="w-6 h-6 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor={`compare-${uni.id}`} className="ml-3 text-lg font-medium text-gray-700 cursor-pointer">
                    Add to Compare ({selectedForCompare.length}/3)
                  </label>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                    Apply Now
                  </button>
                  <button className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compare Button */}
        {/* {selectedForCompare.length >= 2 && selectedForCompare.length <= 3 && (
          <div className="text-center mt-16">
            <button
              onClick={() => alert("Comparison modal will open!")}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xl font-bold px-12 py-5 rounded-full shadow-2xl hover:shadow-3xl transition transform hover:scale-110"
            >
              Compare {selectedForCompare.length} Universities
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default UniversityList;