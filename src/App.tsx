
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './Components/Header';
import Details from './pages/Details';
import DetailAPI from './pages/DetailAPI';
import { useTheme } from './Context/ThemeContext';
import { Link } from 'react-router-dom';
import Footer from './Components/Footer';




function App() {

  const {theme} = useTheme();
 return (
  <>
 
  <div className="min-h-screen flex flex-col font-[var(--font-family)] bg-[var(--bg-color)] text-[var(--text-color)]">
  <Header  />

  <div className='flex flex-1'>
  
  { theme === "dark" && (
    
    <aside className="w-64 bg-[var(--sidebar-bg)] p-6 sticky top-0 h-screen hidden md:block">
  <h2 className='text-xl font-bold mb-4'>
   🌙 
  </h2>

  <nav>
   <ul className="space-y-4">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          </ul> 
  </nav>

  </aside>
  )}

  
<main className='flex-grow px-4 md:px-8 py-6'>
  
  

  
  <Routes>
    <Route path='/' element = {<Home />} />
    <Route path = '/about' element = {<About />} />
    <Route path = '/contact' element = {<Contact />} />
    <Route path = "/details/:id" element = {<Details />} />
    <Route path = "/product/:id" element = {<DetailAPI />} />
    </Routes>
  </main>
  </div>

  <Footer />
  </div>
  
  
  </>
  );
}


export default App;
