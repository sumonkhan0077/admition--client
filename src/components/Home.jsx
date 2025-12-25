// src/components/HomeSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 pt-20 pb-20 px-6 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">

        {/* Premium 2-Column Feature Section */}
        <div className="mt-20 max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20"
          >
            Your Journey to Studying Abroad Starts Here
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Large Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1"
            >
              <img
                src="https://media.istockphoto.com/id/1779070756/photo/two-university-students-walk-down-campus-stairs.jpg?s=612x612&w=0&k=20&c=N7d2_6_aoPReJd9b6fUMG9xWwEj-yX9UG-qjdcIxws0="
                alt="Happy international students walking on a beautiful university campus"
                className="w-full h-full min-h-96 object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-3xl font-bold">Dream Big</p>
                <p className="text-xl mt-2 opacity-90">World-Class Education Awaits</p>
              </div>
            </motion.div>

            {/* Right Column - Feature Cards (Stacked) */}
            <div className="space-y-10 order-1 lg:order-2">
              {/* Feature 1 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16  rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Smart Search & Filters
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Find programs by country, degree level, tuition budget, GPA & IELTS requirements — instantly filtered to match your profile.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 b rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-3xl">⚖️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Side-by-Side Comparison
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Compare up to 3 universities at once — tuition, rankings, eligibility, duration, and more — to make the best decision.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-3xl">✅</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      Quick & Safe Applications
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Check eligibility instantly and apply directly through guided forms. 100% free, no hidden fees.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Simple Trust Stats Section (এখন সঠিক জায়গায় এবং সিম্পল) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 py-16 bg-gray-50/70"
        >
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Trusted by Students Worldwide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-5xl font-bold text-gray-900 mb-4">50,000+</p>
                <p className="text-lg text-gray-600">Students Guided</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-gray-900 mb-4">150+</p>
                <p className="text-lg text-gray-600">Countries & Universities</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-gray-900 mb-4">4.8 / 5</p>
                <p className="text-lg text-gray-600">Average Rating</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3-Column Image Gallery Section */}
        <div className="mt-32">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16"
          >
            Why Thousands of Students Choose UniFinder
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
            {/* Campus */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition"
            >
              <img
                src="https://alumni.cornell.edu/cornellians/wp-content/uploads/sites/2/2023/05/4B3AEA35-2451-4F7E-886C-5F33A568B70D-A.jpg"
                alt="Stunning university campus at sunset"
                className="w-full h-96 object-cover transition group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <p className="text-2xl font-bold">Study at Iconic Campuses</p>
                <p className="mt-2 opacity-90">Harvard, Oxford, Toronto & more</p>
              </div>
            </motion.div>

            {/* Community */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition"
            >
              <img
                src="https://t4.ftcdn.net/jpg/03/19/24/51/360_F_319245189_AJSNcOAn5mFp3XzhEHmaL4RaZq4rhQ4h.jpg"
                alt="Diverse international students laughing and studying together"
                className="w-full h-96 object-cover transition group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <p className="text-2xl font-bold">Join a Diverse Community</p>
                <p className="mt-2 opacity-90">Students from over 150 countries</p>
              </div>
            </motion.div>

            {/* Acceptance */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition"
            >
              <img
                src="https://as2.ftcdn.net/jpg/04/60/59/63/1000_F_460596360_If3FZvSQ2jkUbi7te8f0d7r1KJdkspTj.jpg"
                alt="Excited student celebrating university acceptance"
                className="w-full h-96 object-cover transition group-hover:scale-110 duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-8 text-white">
                <p className="text-2xl font-bold">Get Accepted Faster</p>
                <p className="mt-2 opacity-90">Instant eligibility check & guided applications</p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeSection;