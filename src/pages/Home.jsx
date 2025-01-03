import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 mb-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-orange-400 font-bold">
            Samuel Htamu
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">
            Full Stack Web Developer
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <img 
          className="w-32 sm:w-48 md:w-64 lg:w-80 mx-auto rounded-full border-4 border-orange-400 shadow-xl" 
          src="./src/assets/samprofile.jpg" 
          alt="Profile" 
        />
        <div className="text-center mt-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-400 font-semibold">
            Welcome to My Portfolio
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
            Web Developer from Myanmar
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I specialize in creating responsive, user-friendly web applications using
            React, Node.js, and other cutting-edge technologies.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/about" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-lg transition-colors"
            >
              Learn More
            </Link>
            <Link 
              to="/hire" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-lg transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
