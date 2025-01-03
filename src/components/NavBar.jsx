import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black z-20 bg-opacity-80 fixed top-0 left-0 right-0 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Sam's.</h1>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 lg:space-x-20 font-mono">
          <li><a href="/" className="text-white hover:text-gray-300 transition-colors">Home</a></li>
          <li><a href="/about" className="text-white hover:text-gray-300 transition-colors">About Me</a></li>
          <li><a href="/skills" className="text-white hover:text-gray-300 transition-colors">Skills</a></li>
          <li><a href="/hire" className="text-white hover:text-gray-300 transition-colors">Hire Me.</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="px-2 pt-2 pb-3 space-y-1 font-mono">
          <li><a href="/" className="block text-white py-2 hover:bg-gray-700 rounded-md px-3">Home</a></li>
          <li><a href="/about" className="block text-white py-2 hover:bg-gray-700 rounded-md px-3">About Me</a></li>
          <li><a href="/skills" className="block text-white py-2 hover:bg-gray-700 rounded-md px-3">Skills</a></li>
          <li><a href="/hire" className="block text-white py-2 hover:bg-gray-700 rounded-md px-3">Hire Me.</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
