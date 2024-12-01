import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutImage from '../images/alyssaPic.jpg'

const aboutPageDescription = 'I\'m a licensed esthetician and certified lash and brow artist based in Reno, NV, with 5 years of experience. I specialize in natural lash sets and full-body waxing. My goal is to create a comfortable, relaxing space and provide personalized services for everyone who walks through my door. I love what I do and look forward to helping you feel your best!'

const About: React.FC = () => {
  return (
    <>
      <div className="about">
        <Navbar />

        <div className="aboutPage">
          <div className='AbtbackgroundShapeOne'></div>
          <div className='AbtbackgroundShapeTwo'></div>
          <div className='AbtbackgroundShapeThree'></div>
          <img src={AboutImage} alt="Alyssa" className="aboutImage" />
          <section className="aboutText">
            <h2 className="aboutIntro">Hi, <br /> I'm Alyssa!</h2>
            <p className="aboutDesc">{aboutPageDescription}</p>
          </section>

        </div>

      </div>
      <Footer />
    </>


  );
};

export default About;
