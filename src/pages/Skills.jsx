import React from 'react';
import ProductList from '../components/ProductList';

const Skills = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-4">
          My Skills
        </h1>
        <p className="text-gray-300 text-lg">
          Here are the technologies and tools I work with to build modern web applications.
        </p>
      </div>
      <ProductList />
    </div>
  );
};

export default Skills;