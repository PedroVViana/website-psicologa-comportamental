import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Specialties from './components/Specialties';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <About />
      <Specialties/>
      <Testimonials />
      <HowItWorks/>
      <Contact />
      <FAQ/>
      <Footer />
      <FloatingWhatsAppButton/>
    </div>
  );
}

export default App;
