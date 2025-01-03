import { useState } from 'react';
import ProductList from '../components/ProductList';

const Home = () => {
    const [name, setName] = useState("Ko Ko");
    const [age, setAge] = useState(0);

    const updateName = () => {
      setName("Samuel Htamu");
    }
    
    const updateAge = () => {
      setAge(age + 1);
    }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 mb-12">
        <div className="space-y-4">
          <div className="text-2xl sm:text-4xl md:text-6xl text-orange-400 font-semibold">
            <p>Name: {name}</p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded-md text-base sm:text-lg transition-colors' onClick={updateName}>
              Set Name
            </button>
            <p className="mt-4">Age: {age}</p>
            <button className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded-md text-base sm:text-lg transition-colors' onClick={updateAge}>
              Set Age
            </button>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <img 
          className='w-32 sm:w-48 md:w-64 lg:w-80 mx-auto rounded-full border-4 shadow-xl' 
          src="./src/assets/samprofile.jpg" 
          alt="Profile" 
        />
        <div className="text-center mt-8 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-orange-400 font-semibold">
            Warmly welcome...
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-50 font-semibold">
            Myanmar, Developer from Philippine.
          </h2>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className='font-mono text-slate-50 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-justify max-w-4xl mx-auto'>
          🚀🙋‍♂️ I am Samuel Htamu, a passionate and results-driven front-end developer with expertise in React.js and JavaScript. 
          With a strong foundation in building dynamic, user-friendly, and responsive web applications, I specialize in creating 
          seamless digital experiences. My proficiency in modern JavaScript frameworks, component-based architecture, and performance 
          optimization enables me to deliver scalable solutions that meet user needs and business goals. Dedicated to continuous 
          learning and innovation, I am eager to contribute to impactful projects and help bring ideas to life through exceptional 
          web development.
        </p>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className='text-center text-white text-sm sm:text-base md:text-lg mb-8'>
          Here you can browse through my skills and experience in web development.
        </p>
        <ProductList />
      </section>

      {/* Additional Content Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <p className='font-serif text-white text-sm sm:text-base md:text-lg leading-relaxed text-justify max-w-4xl mx-auto'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni animi eum accusantium, 
          aspernatur modi ea officiis dolorem perspiciatis dicta inventore, numquam nihil aperiam 
          impedit maxime voluptate velit facilis ad maiores! Ut quas deleniti natus harum, eligendi 
          totam doloribus rem quo molestias quos similique quasi hic eum, eaque dignissimos facilis 
          fugiat asperiores, tempore debitis. Quasi alias asperiores, numquam rem nostrum possimus?
          Eligendi maxime mollitia quia? Distinctio deleniti esse, mollitia culpa maiores dolores 
          possimus quos dolorum repellendus itaque assumenda accusamus cum eveniet commodi magnam 
          officiis. Et voluptatibus earum provident nostrum quae illo?
        </p>
      </section>
    </div>
  );
};

export default Home;
