"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full text-[#241201]">
      {/* Top banner */}
      <div className="w-full bg-gradient-to-r from-[#FFF350] to-[#00E6F2]">
        <p className="text-center text-xs  px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      {/* Navigation bar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-16 py-4">
        {/* Logo/Brand */}
        <div className="flex-shrink-0">
          <h1 className="text-md font-[550]">The Simple Thing</h1>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks onLinkClick={() => {}} />
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <CTAButton />
        </div>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50"
            >
              <div className="px-4 py-6 space-y-4">
                <NavLinks onLinkClick={() => setIsMenuOpen(false)} />
                <div className="pt-4">
                  <CTAButton />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

function NavLinks({ onLinkClick }) {
  return (
    <>
      <a
        href="#"
        className="relative text-xs text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-100 after:bg-gray-900 after:transition-transform hover:after:scale-x-0"
        onClick={onLinkClick}
      >
        Coaching
      </a>
      <a 
        href="#" 
        className="text-xs text-gray-600 hover:text-gray-900"
        onClick={onLinkClick}
      >
        About
      </a>
      <a 
        href="#" 
        className="text-xs text-gray-600 hover:text-gray-900"
        onClick={onLinkClick}
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

