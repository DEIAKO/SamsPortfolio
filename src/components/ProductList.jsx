import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Java Script', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'React.Js', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Node.Js', image: 'https://via.placeholder.com/150' },
    // More products...
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}


export default ProductList;
