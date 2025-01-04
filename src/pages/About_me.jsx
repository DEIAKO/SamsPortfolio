import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text mb-8 text-center"
        >
          About Me
        </motion.h1>

        {/* Profile Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 mb-8 border border-gray-700/50 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.img 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              src="/assets/samprofile.jpg"
              alt="Samuel Htamu"
              className="w-48 h-48 rounded-full border-4 border-orange-400 shadow-lg hover:border-pink-500 transition-colors duration-300 object-cover"
              onError={(e) => {
                console.warn('Failed to load profile image');
                e.target.src = '/assets/placeholder.svg';
              }}
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Samuel Htamu</h2>
              <p className="text-gray-300 mb-4">
                Full Stack Web Developer based in Myanmar, specializing in building modern web applications
                with a focus on user experience and performance.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/DEIAKO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-full transition-colors duration-300"
                >
                  GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/samuel-htamu-b2b3b4297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors duration-300"
                >
                  LinkedIn
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 mb-8 border border-gray-700/50 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-orange-400">Full Stack Developer</h3>
              <p className="text-gray-400">Freelance • 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed responsive web applications using React and Node.js</li>
                <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                <li>Built RESTful APIs and integrated with frontend applications</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6 mb-8 border border-gray-700/50 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-orange-400">Computer Science</h3>
              <p className="text-gray-400">University of Computer Studies, Myitkyina • 2020 - Present</p>
              <p className="text-gray-300 mt-2">
                Studying computer science with a focus on web development and software engineering.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/hire"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;