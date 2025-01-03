import React from 'react';

const ProductCard = ({ product = {} }) => {
  const {
    name = '',
    description = '',
    image = 'https://via.placeholder.com/80?text=Skill',
    language = '',
    stars = 0
  } = product;

  // Rest of your ProductCard component...
};

export default ProductCard;