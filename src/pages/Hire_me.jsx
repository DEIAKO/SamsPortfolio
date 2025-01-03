import React from 'react';

const HireMe = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-8 text-center">
          Hire Me
        </h1>

        {/* Contact Information */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Let's Work Together!</h2>
          <p className="text-gray-300 mb-8 text-lg">
            I'm currently available for freelance projects and full-time positions. 
            If you're interested in working together or have any questions, please don't hesitate to reach out!
          </p>
          <div className="space-y-6">
            <div className="flex items-center text-gray-300">
              <svg className="w-6 h-6 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a 
                href="mailto:samuelhtamu114@gmail.com" 
                className="hover:text-orange-400 transition-colors text-lg"
              >
                samuelhtamu114@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-6 h-6 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="text-lg">Myitkyina, Kachin State, Myanmar</span>
            </div>
            <div className="flex items-center text-gray-300">
              <svg className="w-6 h-6 mr-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.332 8.027c.81-2.334 3.074-4.021 5.754-4.021 2.68 0 4.944 1.687 5.754 4.021A8.093 8.093 0 0118 10a8 8 0 11-16 0c0-.695.07-1.373.202-2.027z" clipRule="evenodd" />
              </svg>
              <span className="text-lg">Available for Remote Work</span>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="bg-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Services I Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-lg bg-gray-700">
              <h3 className="text-xl font-medium text-orange-400 mb-2">Web Development</h3>
              <p className="text-gray-300">
                Full-stack web development using React, Node.js, and modern web technologies.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-700">
              <h3 className="text-xl font-medium text-orange-400 mb-2">UI/UX Design</h3>
              <p className="text-gray-300">
                Creating beautiful and intuitive user interfaces with modern design principles.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-700">
              <h3 className="text-xl font-medium text-orange-400 mb-2">API Development</h3>
              <p className="text-gray-300">
                Building robust and scalable APIs using Node.js and Express.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-700">
              <h3 className="text-xl font-medium text-orange-400 mb-2">Consultation</h3>
              <p className="text-gray-300">
                Technical consultation and advice for your web development projects.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-6">Connect With Me</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/DEIAKO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/samuel-htamu-b2b3b4297/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm12.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;