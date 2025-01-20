"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const transition = { 
    type: "spring",
    stiffness: 500,
    damping: 20
  };

  return (
    <>
      {/* Top banner - Outside of sticky container */}
      <div className="w-full bg-gradient-to-r from-[#FFF350] to-[#00E6F2]">
        <p className="text-center text-black text-xs py-[0.3rem] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      {/* Sticky container for navbar */}
      <div className={`sticky top-0 z-50  transition-colors duration-300 ${isMenuOpen ? 'bg-[#FFF350]' : 'bg-white'}`}>
        <header className="w-full text-[#241201]">
          {/* Navigation bar */}
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-16 py-4 relative">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className="text-md font-[550]">The Simple Thing</h1>
            </div>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <NavLinks />
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <CTAButton />
            </div>

            {/* Menu Button - Mobile */}
            <button
              className="md:hidden text-black focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <motion.div className="space-y-1.5 w-6 h-6 flex flex-col justify-center items-center">
                <motion.span
                  animate={isMenuOpen ? { rotate: 48, y: 6}: { rotate: 0, y: 0 }}
                  transition={transition}
                  className="block w-6 h-0.5 bg-current duration-75 origin-center"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-6 h-0.5 bg-current"
                ></motion.span>
                <motion.span
                  animate={isMenuOpen ? { rotate: -48, y: -10 } : { rotate: 0, y: 0 }}
                  transition={transition}
                  className="block w-6 h-0.5 bg-current duration-75 origin-center"
                ></motion.span>
              </motion.div>
            </button>
          </nav>
        </header>
      </div>

      {/* Sidebar - Move outside of sticky container */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

function NavLinks() {
  return (
    <>
      <a
        href="#"
        className="relative text-xs text-gray-600 hover:text-gray-900"
      >
        Coaching
      </a>
      <a 
        href="#" 
        className="text-xs text-gray-600 hover:text-gray-900"
      >
        About
      </a>
      <a 
        href="#" 
        className="text-xs text-gray-600 hover:text-gray-900"
      >
        Resources
      </a>
    </>
  );
}

function CTAButton() {
  return (
    <div className="relative group inline-block">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFF350] to-[#00E6F2] rounded-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <button className="relative text-xs px-3 leading-tighter py-2 text-[#1E1E1E] bg-white rounded-lg flex items-center">
        Book your Session
      </button>
    </div>
  );
}

