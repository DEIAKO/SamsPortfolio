import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-black z-20 bg-opacity-80 fixed top-0 left-0 right-0 p-2">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Sam's.</h1>
        <ul className="flex space-x-20 font-mono">
          <li><a href="/" className="text-white">Home</a></li>
          <li><a href="/cart" className="text-white">About Me</a></li>
          <li><a href="/cart" className="text-white">Skills</a></li>
          <li><a href="/cart" className="text-white">Hire Me.</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
