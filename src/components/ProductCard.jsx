import React from 'react';

const ProductCard = ({ product = {} }) => {
  const {
    name = '',
    description = '',
    image = 'https://via.placeholder.com/80?text=Skill',
    language = '',
    stars = 0
  } = product;

  return (
    <div className="border rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-sm hover:scale-105 flex flex-col">
      <div className="flex items-center justify-center mb-6">
        <img 
          src={image} 
          alt={name || 'Skill'} 
          className="h-20 w-20 object-contain"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/80?text=Skill';
          }}
        />
      </div>
      
      <div className="flex-1 space-y-4">
        <h3 className="card-title text-white text-center">{name}</h3>
        <p className="card-text text-gray-300 text-center">{description}</p>
        
        {language && (
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-300 mt-4">
            <span className="flex items-center bg-white/5 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              {language}
            </span>
          </div>
        )}

        <div className="flex justify-center mt-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-5 h-5 ${
                  index < stars ? 'text-yellow-400' : 'text-gray-500'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
