import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import '../styles/index.scss';
import { Helmet } from 'react-helmet';

const LandingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Helmet>
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
