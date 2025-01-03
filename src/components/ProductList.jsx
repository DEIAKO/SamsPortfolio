import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const projects = [
    {
      id: 1,
      name: "JavaScript Development",
      description: "Advanced JavaScript programming including ES6+ features, async/await, and DOM manipulation.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      language: "JavaScript",
      url: "#",
      stars: 5
    },
    {
      id: 2,
      name: "React.js Expertise",
      description: "Building modern web applications with React, including hooks, context API, and state management.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      language: "React",
      url: "#",
      stars: 5
    },
    {
      id: 3,
      name: "Node.js Backend",
      description: "Server-side development with Node.js, Express, and RESTful API design.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      language: "Node.js",
      url: "#",
      stars: 4
    },
    {
      id: 4,
      name: "HTML5 & CSS3",
      description: "Modern web design with HTML5 features and CSS3 animations, flexbox, and grid layouts.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      language: "HTML/CSS",
      url: "#",
      stars: 5
    },
    {
      id: 5,
      name: "Tailwind CSS",
      description: "Responsive design using Tailwind CSS utility-first framework.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      language: "CSS",
      url: "#",
      stars: 5
    },
    {
      id: 6,
      name: "Git Version Control",
      description: "Source code management using Git and GitHub for collaboration and deployment.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      language: "Git",
      url: "#",
      stars: 4
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        My Skills & Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProductCard key={project.id} product={project} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
