// src/components/ComparisonModal.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ComparisonModal = ({ universities, onClose }) => {
  if (!universities || universities.length < 2) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-3xl shadow-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-extrabold text-gray-900">
              University Comparison
            </h2>
            <button
              onClick={onClose}
              className="text-4xl text-gray-500 hover:text-gray-800 transition"
            >
              ×
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-4">
              <thead>
                <tr>
                  <th className="text-lg font-semibold text-gray-700 pb-4">Criteria</th>
                  {universities.map(uni => (
                    <th key={uni.id} className="text-lg font-bold text-center pb-4 px-6">
                      {uni.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium text-gray-800 py-4">Location</td>
                  {universities.map(uni => (
                    <td key={uni.id} className="text-center py-4 px-6">
                      {uni.city}, {uni.country}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-medium text-gray-800 py-4">Degree Level</td>
                  {universities.map(uni => (
                    <td key={uni.id} className="text-center py-4 px-6 font-medium text-blue-600">
                      {uni.degree_level}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="font-medium text-gray-800 py-4">Tuition Fee (per year)</td>
                  {universities.map(uni => (
                    <td key={uni.id} className="text-center py-4 px-6 font-bold text-green-600">
                      ${uni.tuition_fee.toLocaleString()}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-medium text-gray-800 py-4">Required GPA</td>
                  {universities.map(uni => (
                    <td key={uni.id} className="text-center py-4 px-6 font-semibold">
                      {uni.required_gpa}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="font-medium text-gray-800 py-4">Required IELTS</td>
                  {universities.map(uni => (
                    <td key={uni.id} className="text-center py-4 px-6 font-semibold">
                      {uni.required_ielts}
                    </td>
                  ))}
                </tr>
                <tr className="bg-gray-50">
                  <td className="font-medium text-gray-800 py-4">World Ranking</td>
                  {universities.map(uni => (
                    <td key={uni.id} className="text-center py-4 px-6 font-bold text-purple-600">
                      #{uni.ranking}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={onClose}
              className="px-10 py-4 bg-gray-200 text-gray-800 font-bold rounded-xl hover:bg-gray-300 transition"
            >
              Close Comparison
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ComparisonModal;