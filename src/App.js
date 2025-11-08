import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Commitments from './components/Commitments';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Equipment from './components/Equipment';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Commitments />
      <Testimonials />
      <Contact />
      <Equipment />
      <Footer />
    </div>
  );
}

export default App;