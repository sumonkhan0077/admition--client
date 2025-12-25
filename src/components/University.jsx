import React from 'react';
import { motion } from 'framer-motion';

const University = ({universities , loading, error}) => {

    if (loading) {
    return (
      <div className="text-center py-20">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
        <p className="mt-4 text-xl text-gray-600">Loading universities...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-red-600 font-bold">Error: {error}</p>
        <p className="text-gray-600 mt-2">Make sure your backend server is running on port 5000</p>
      </div>
    );
  }

  if (universities.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-2xl text-gray-600">No universities found.</p>
      </div>
    );
  }
    return (
        <div>
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
              {/* Logo / Placeholder */}
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

              {/* Card Body */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{uni.name}</h3>
                <p className="text-lg text-gray-600 mb-6">
                  <span className="font-semibold">{uni.city}</span>, {uni.country}
                </p>

                {/* Details Grid */}
                <div className="space-y-4 text-base">
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

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4">
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
      </div>
    </section>
            
        </div>
    );
};

export default University;