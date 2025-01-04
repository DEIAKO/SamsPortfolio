import React from 'react';
import ProductCard from './ProductCard';
import ErrorBoundary from './ErrorBoundary';
import { motion } from 'framer-motion';

const ProductList = () => {
  const products = {
    frontend: [
      {
        name: 'React.js',
        description: 'Building user interfaces with React components and hooks',
        category: 'Frontend',
        stars: 5,
      },
      {
        name: 'JavaScript',
        description: 'Modern ES6+ JavaScript development and best practices',
        category: 'Frontend',
        stars: 5,
      },
      {
        name: 'HTML5/CSS3',
        description: 'Semantic HTML and modern CSS techniques including Flexbox and Grid',
        category: 'Frontend',
        stars: 5,
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first CSS framework for rapid UI development',
        category: 'Frontend',
        stars: 4,
      },
    ],
    backend: [
      {
        name: 'Node.js',
        description: 'Server-side JavaScript runtime environment',
        category: 'Backend',
        stars: 4,
      },
      {
        name: 'Express.js',
        description: 'Web application framework for Node.js',
        category: 'Backend',
        stars: 4,
      },
      {
        name: 'MongoDB',
        description: 'NoSQL database for modern applications',
        category: 'Backend',
        stars: 3,
      },
      {
        name: 'RESTful APIs',
        description: 'Designing and implementing RESTful web services',
        category: 'Backend',
        stars: 4,
      },
    ],
    tools: [
      {
        name: 'Git & GitHub',
        description: 'Version control and collaborative development',
        category: 'Tools',
        stars: 4,
      },
      {
        name: 'VS Code',
        description: 'Advanced code editing and debugging',
        category: 'Tools',
        stars: 5,
      },
      {
        name: 'Webpack',
        description: 'Module bundling and build optimization',
        category: 'Tools',
        stars: 3,
      },
      {
        name: 'npm/yarn',
        description: 'Package management and dependency handling',
        category: 'Tools',
        stars: 4,
      },
    ],
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const renderSkillSection = (category, items) => {
    if (!Array.isArray(items) || items.length === 0) {
      return (
        <div className="p-4 bg-gray-800/50 rounded-lg">
          <p className="text-gray-400">No skills found in this category.</p>
        </div>
      );
    }

    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.map((product, index) => (
          <motion.div
            key={`${category}-${product.name}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ErrorBoundary>
              <ProductCard product={product} />
            </ErrorBoundary>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-300 mb-4">My Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here's a comprehensive overview of my technical skills and proficiency levels
          across different areas of web development.
        </p>
      </motion.div>

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-semibold text-blue-400 mb-6 capitalize"
          >
            {category} Development
          </motion.h3>
          {renderSkillSection(category, items)}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
