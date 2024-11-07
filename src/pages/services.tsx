import React from 'react';
import Navbar from '../components/Navbar';
import ServicePage from '../components/ServicePage';
import '../styles/index.scss';

const LandingPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <ServicePage />
    </>
  );
};

export default LandingPage;
