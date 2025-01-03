import React from 'react';

const HireMe = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-white mb-8">Hire Me</h1>
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Let's Work Together!</h2>
        <p className="text-gray-300 mb-6">
          I'm currently available for freelance work and full-time positions. 
          If you're interested in working together, please get in touch!
        </p>
        <div className="space-y-4">
          <div className="flex items-center text-gray-300">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
              your.email@example.com
            </a>
          </div>
          <div className="flex items-center text-gray-300">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.332 8.027c.81-2.334 3.074-4.021 5.754-4.021 2.68 0 4.944 1.687 5.754 4.021A8.093 8.093 0 0118 10a8 8 0 11-16 0c0-.695.07-1.373.202-2.027z" clipRule="evenodd" />
            </svg>
            <span>Available Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;