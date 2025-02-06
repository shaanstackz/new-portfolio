import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-2xl font-bold font-fira-code tracking-wide">
          shaan kohli
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6 font-press-start-2p text-sm">
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
    </header>
  );
};

export default Header;
