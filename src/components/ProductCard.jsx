import React from 'react';

const ProductCard = ({ product = {} }) => {
  const {
    name = '',
    description = '',
    image = 'https://via.placeholder.com/80?text=Skill',
    category = '',
    stars = 0
  } = product;

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-gray-900/70 border border-gray-800/50 hover:border-blue-500/50">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={image}
              alt={name}
              className="w-12 h-12 filter brightness-110"
            />
            <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm border border-blue-700/50">
              {category}
            </span>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < stars ? 'text-blue-400' : 'text-gray-700'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-blue-300 mb-2">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
