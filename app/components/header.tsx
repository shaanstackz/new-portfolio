"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-gray-900 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold font-fira-code tracking-wide">
          shaan kohli
        </h1>

        {/* Mobile Hamburger Icon */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links for Desktop */}
        <nav className="hidden lg:flex space-x-6 font-press-start-2p text-sm">
          <a href="#education" className="hover:text-blue-400 transition duration-300">
            Education
          </a>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">
            Projects
          </a>
          <a href="#experience" className="hover:text-blue-400 transition duration-300">
            Work
          </a>
        </nav>
      </div>

      {/* Dropdown menu for mobile */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-800 py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4">
            <a href="#education" className="text-white hover:text-blue-400 transition duration-300">
              Education
            </a>
            <a href="#projects" className="text-white hover:text-blue-400 transition duration-300">
              Projects
            </a>
            <a href="#experience" className="text-white hover:text-blue-400 transition duration-300">
              Work
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
