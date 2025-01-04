import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  // Animation variants for background shapes
  const shapeVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          variants={shapeVariants}
          animate="animate"
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl"
        />
        
        <motion.div
          variants={shapeVariants}
          animate="animate"
          style={{ animationDelay: "-5s" }}
          className="absolute top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20 blur-3xl"
        />
        
        <motion.div
          variants={shapeVariants}
          animate="animate"
          style={{ animationDelay: "-10s" }}
          className="absolute -bottom-1/4 left-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 blur-3xl"
        />
      </div>

      {/* Content with glassmorphism effect */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl font-bold"
          >
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
              Hi, I'm Samuel Htamu
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-300"
          >
            Full Stack Web Developer crafting beautiful and functional web experiences
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/hire"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </Link>
            <Link 
              to="/about"
              className="px-8 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-full font-medium text-lg border border-gray-700 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="pt-12"
          >
            <h2 className="text-2xl font-semibold text-gray-200 mb-4">Featured Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['React', 'Node.js', 'JavaScript', 'Tailwind CSS'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-800/30 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
