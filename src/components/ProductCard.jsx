import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductCard = ({ product }) => {
  // Ensure product is an object, even if undefined is passed
  const safeProduct = product || {};
  
  const {
    name = '',
    description = '',
    category = '',
    stars = 0
  } = safeProduct;

  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Skill icons mapping
  const skillIcons = {
    'React.js': '/assets/react.svg',
    'JavaScript': '/assets/javascript.svg',
    'HTML5/CSS3': '/assets/html5.svg',
    'Tailwind CSS': '/assets/tailwind.svg',
    'Node.js': '/assets/nodejs.svg',
    'Express.js': '/assets/nodejs.svg', // Using Node.js icon for Express
    'MongoDB': '/assets/placeholder.svg',
    'Git & GitHub': '/assets/placeholder.svg',
    'VS Code': '/assets/placeholder.svg',
    'Webpack': '/assets/placeholder.svg',
    'npm/yarn': '/assets/placeholder.svg',
    'RESTful APIs': '/assets/placeholder.svg'
  };

  // Get image URL with error handling
  const getImageUrl = useCallback(() => {
    try {
      const iconPath = skillIcons[name];
      return iconPath || '/assets/placeholder.svg';
    } catch (error) {
      console.error('Error getting image URL:', error);
      return '/assets/placeholder.svg';
    }
  }, [name]);

  const handleImageError = useCallback(() => {
    console.warn(`Failed to load image for ${name}`);
    setImageError(true);
    setIsLoading(false);
  }, [name]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Reset states when product changes
  useEffect(() => {
    setImageError(false);
    setIsLoading(true);
  }, [product]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50 hover:border-indigo-500/50 transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        {/* Image/Icon Section */}
        <div className="relative flex-shrink-0 w-16 h-16">
          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg"
              >
                <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.img
            src={getImageUrl()}
            alt={name}
            onError={handleImageError}
            onLoad={handleImageLoad}
            className={`w-16 h-16 rounded-lg object-contain ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            initial={false}
            animate={{ scale: isLoading ? 0.8 : 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
          <p className="text-gray-300 text-sm mb-3">{description}</p>
          
          {/* Category Badge */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            {category}
          </span>

          {/* Skill Level */}
          <div className="mt-3 flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <motion.svg
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`w-4 h-4 ${
                  index < stars ? 'text-yellow-400' : 'text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
