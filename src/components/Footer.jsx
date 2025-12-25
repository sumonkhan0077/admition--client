// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-gray-900 to-gray-800 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Column 1: Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-6">
             <div className="">
              <img className='w-10 h-10 ' src="../../src/assets/download.png" alt="logo" />
            </div>
              <h2 className="text-3xl font-extrabold bg-gradient-to-r from-[#BB8ED0] to-[#3e8fae] bg-clip-text text-transparent">
                UniFinder
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted platform to discover, compare, and apply to the world's best universities. 
              Start your global education journey today!
            </p>
            <p className="text-sm text-gray-400 mt-6">
              © 2025 UniFinder. All rights reserved. Made with ❤️ for students worldwide.
            </p>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-blue-300">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#search" className="text-gray-300 hover:text-white transition">Find Universities</a></li>
              <li><a href="#universities" className="text-gray-300 hover:text-white transition">Explore Programs</a></li>
              <li><a href="#compare" className="text-gray-300 hover:text-white transition">Compare Universities</a></li>
              <li><a href="#apply" className="text-gray-300 hover:text-white transition">How to Apply</a></li>
            </ul>
          </motion.div>

          {/* Column 3: Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 text-purple-300">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Scholarships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Visa Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">IELTS Preparation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Student Blogs</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Success Stories</a></li>
            </ul>
          </motion.div>

          {/* Column 4: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 text-pink-300">Connect With Us</h3>
            <p className="text-gray-300 mb-6">
              Have questions? We're here to help!<br />
              <a href="mailto:support@unifinder.com" className="text-blue-300 hover:underline">support@unifinder.com</a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition transform hover:scale-110">
                <span className="text-2xl"><FaFacebookF /></span> {/* Facebook */}
              </a>
              <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition transform hover:scale-110">
                <span className="text-2xl"><FaInstagram /></span> {/* Instagram */}
              </a>
              <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition transform hover:scale-110">
                <span className="text-2xl"><FaLinkedinIn /></span> {/* Twitter/X */}
              </a>
              <a href="#" className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-black transition transform hover:scale-110">
                <span className="text-2xl"><FaXTwitter /></span> {/* LinkedIn */}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Designed & Developed with passion for education | Powered by dreams ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;