import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/About_me';
import Skills from './pages/Skills';
import HireMe from './pages/Hire_me';

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-700 via-purple-950 to-gray-500 min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/hire" element={<HireMe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
