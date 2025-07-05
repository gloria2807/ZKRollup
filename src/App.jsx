import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Intro from './Components/Intro/Intro';
import About from './Components/About/about';
import Buy from './Components/Buy/Buy';
import Tokenomics from './Components/Tokenomics/Tokenomics';
import Roadmap from './Components/Roadmap/Roadmap';
import FAQ from './Components/FAQ/FAQ';
import Footer from './Components/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

  const App = () => {
     useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 800,
        easing: 'ease-in-sine',
        delay: 100,
      });
      AOS.refresh();
    }, []);
return (
  <div className="overflow-hidden">
  <Navbar />
  <Hero />
  <Intro />
  <About />
  <Buy />
  <Roadmap />
  <FAQ />
  <Footer />
  </div>
);
  };


export default App;
