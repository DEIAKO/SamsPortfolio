import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <img src={product.image} alt={product.name} className="h-48 w-full object-cover"/>
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500 mt-1">${product.price}</p>
      <button className="bg-blue-500 text-white p-2 mt-4 rounded-md">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
