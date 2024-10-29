import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import '../styles/index.scss';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact />
    </>
  );
};

export default LandingPage;
