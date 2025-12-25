// src/components/HomeSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Headline Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
        >
          Find Your <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream University</span> <br />
          Abroad in One Place
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          Search, compare tuition & eligibility, and apply directly to top universities worldwide — all for free!
        </motion.p>

        {/* Quick Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto mb-20"
          id="search"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Start Your Journey Now</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Select Country</label>
              <select className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition">
                <option>All Countries</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>More...</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Degree Level</label>
              <select className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 transition">
                <option>All Degrees</option>
                <option>Bachelor's</option>
                <option>Master's</option>
                <option>PhD</option>
              </select>
            </div>
          </div>
          <a
            href="#universities"
            className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold py-5 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            Search Universities →
          </a>
        </motion.div>

        {/* Image Gallery Section */}
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-gray-800 mb-12"
          >
            Your Future Starts Here
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Image 1: Beautiful Campus */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src="https://media.architecturaldigest.com/photos/5bdc8f8bf448d42dde21fd65/master/w_1024%2Cc_limit/1.%2520Yale%2520University:%2520New%2520Haven%2C%2520Connecticut.jpg"
                alt="Beautiful Yale University campus at sunset"
                className="w-full h-80 object-cover"
              />
              <div className="bg-white p-6">
                <p className="text-lg font-semibold text-gray-800">Study at World-Class Campuses</p>
              </div>
            </motion.div>

            {/* Image 2: Diverse Students */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src="https://thumbs.dreamstime.com/b/group-discussion-collaborative-studying-happy-friendly-diverse-team-college-students-groupmates-gather-around-library-table-395634951.jpg"
                alt="Happy diverse international students studying together"
                className="w-full h-80 object-cover"
              />
              <div className="bg-white p-6">
                <p className="text-lg font-semibold text-gray-800">Join a Global Community</p>
              </div>
            </motion.div>

            {/* Image 3: Online Application */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105"
            >
              <img
                src="https://media.istockphoto.com/id/936987328/photo/young-man-writing-college-or-university-application-form-with-laptop-student-applying-to.jpg?s=612x612&w=0&k=20&c=aknzuVW3kBeMou_yYWaKOXn-hoz3nVVePOVKI5qBYWk="
                alt="Student applying to university online"
                className="w-full h-80 object-cover"
              />
              <div className="bg-white p-6">
                <p className="text-lg font-semibold text-gray-800">Apply Easily & Quickly</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;