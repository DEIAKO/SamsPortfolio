import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const skills = [
    // Frontend Development
    {
      id: 1,
      name: "JavaScript",
      description: "Modern JavaScript (ES6+), async programming, DOM manipulation, and functional programming concepts.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Frontend",
      stars: 5
    },
    {
      id: 2,
      name: "React.js",
      description: "Component-based architecture, hooks, context API, Redux, and modern React patterns.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      stars: 5
    },
    {
      id: 3,
      name: "HTML5",
      description: "Semantic markup, accessibility best practices, and modern HTML5 features.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
      stars: 5
    },
    {
      id: 4,
      name: "CSS3",
      description: "Modern layouts with Flexbox and Grid, animations, responsive design, and CSS preprocessors.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
      stars: 5
    },
    {
      id: 5,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development with responsive design.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      category: "Frontend",
      stars: 5
    },

    // Backend Development
    {
      id: 6,
      name: "Node.js",
      description: "Server-side JavaScript, Express.js framework, and RESTful API development.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      stars: 4
    },
    {
      id: 7,
      name: "Express.js",
      description: "Building scalable web applications and APIs with middleware architecture.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
      stars: 4
    },
    {
      id: 8,
      name: "MongoDB",
      description: "NoSQL database design, Mongoose ODM, and data modeling.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Backend",
      stars: 4
    },

    // Development Tools
    {
      id: 9,
      name: "Git",
      description: "Version control, branching strategies, and collaborative development workflows.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Tools",
      stars: 4
    },
    {
      id: 10,
      name: "VS Code",
      description: "Advanced code editing, debugging, and development workflow optimization.",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "Tools",
      stars: 5
    }
  ];

  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-semibold text-white mb-6">
            {category} Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <ProductCard key={skill.id} product={skill} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
