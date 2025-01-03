import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 mb-8 text-center">
          About Me
        </h1>

        {/* Profile Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img 
              src="./src/assets/samprofile.jpg"
              alt="Samuel Htamu"
              className="w-48 h-48 rounded-full border-4 border-orange-400"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Samuel Htamu</h2>
              <p className="text-gray-300 mb-4">
                Full Stack Web Developer based in Myanmar, specializing in building modern web applications
                with a focus on user experience and performance.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/DEIAKO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/samuel-htamu-b2b3b4297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-orange-400">Full Stack Developer</h3>
              <p className="text-gray-400">Freelance • 2023 - Present</p>
              <ul className="list-disc list-inside text-gray-300 mt-2">
                <li>Developed responsive web applications using React and Node.js</li>
                <li>Implemented modern UI/UX designs using Tailwind CSS</li>
                <li>Built RESTful APIs and integrated with frontend applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-orange-400">Computer Science</h3>
              <p className="text-gray-400">University of Computer Studies, Myitkyina • 2020 - Present</p>
              <p className="text-gray-300 mt-2">
                Studying computer science with a focus on web development and software engineering.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/hire"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg transition-colors"
          >
            Let's Work Together
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;