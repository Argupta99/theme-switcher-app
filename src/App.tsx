
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './Components/Header';
import Details from './pages/Details';


function App() {
 return (
  <>

  <Header />
<main className='min-h-screen pt-5  transition-all duration-300 ease-in-out'>
  
  <Routes>
    <Route path='/' element = {<Home />} />
    <Route path = '/about' element = {<About />} />
    <Route path = '/contact' element = {<Contact />} />
    <Route path = "/details/:id" element = {<Details />} />
    </Routes>

  </main>
  
  
  </>
  );
}

export default App;
