// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-white">U</span>
            </div>
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              UniFinder
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-gray-700 font-medium hover:text-blue-600 transition relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#search" className="text-gray-700 font-medium hover:text-blue-600 transition relative group">
              Find Universities
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#universities" className="text-gray-700 font-medium hover:text-blue-600 transition relative group">
              Explore
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
        
            <a href="#universities" className="text-gray-700 font-medium hover:text-blue-600 transition relative group">
              Apply
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* Login / Sign Up Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition">
              Login
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition transform hover:scale-105">
              Sign Up Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-gray-700 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-6 pb-6"
          >
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition">Home</a>
              <a href="#search" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition">Find Universities</a>
              <a href="#universities" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition">Explore</a>
              <a href="#compare" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition">Compare</a>
              <a href="#apply" className="text-gray-700 text-lg font-medium hover:text-blue-600 transition">Apply</a>
            </nav>
            <div className="mt-8 flex flex-col space-y-4">
              <button className="px-6 py-3 text-blue-600 font-semibold border-2 border-blue-600 rounded-full hover:bg-blue-50 transition">
                Login
              </button>
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition">
                Sign Up Free
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;