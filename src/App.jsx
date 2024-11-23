import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="bg-gradient-to-b from-slate-700 via-purple-950 to-gray-500">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
