import React from 'react';
import Navbar from '../components/Navbar';
import ServicePage from '../components/ServicePage';
import Footer from '../components/Footer';
import '../styles/index.scss';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <ServicePage />
      <Footer />
    </>
  );
};

export default LandingPage;
