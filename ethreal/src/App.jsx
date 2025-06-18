import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './components/Navbar';
import Contact from './page/Contact';
import Services from './page/Service';
import About from './page/About';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Dubai from './page/Dubai';
import Philipins from './page/Philipins';
import Aliganj from './page/Aliganj';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Dubai' element={<Dubai/>} />
          <Route path='/Philipins' element={<Philipins />} />
       
          <Route path='/Aliganj' element={<Aliganj/>} />
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
