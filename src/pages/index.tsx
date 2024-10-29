import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import '../styles/index.scss';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default LandingPage;
