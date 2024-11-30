import React, { useEffect, useState } from 'react';
import HeroImageOne from '../images/imageTwo.jpg'
import HeroImageTwo from '../images/imageThree.jpg'
import HeroArrow from '../images/heroArrow.svg'
import HeroShape from '../images/heroShape.svg'

const Hero: React.FC = () => {

    return (
        <div className='hero' id='hero'>
                <>
                    <div className='backgroundShapeOne'></div>
                    <div className='backgroundShapeTwo'></div>
                    <img src={HeroShape} className='backgroundShapeThree' />
                    <section className='heroSectionWrapper'>
                        <section className='heroDescriptionSide'>
                            <h2 className='tagline'>Elevate Your Beauty, One Lash at a Time</h2>
                            <p className='tagline secondary'>Lashes, Brows, Full Body Waxes, and Skincare done with care and attention. <span>Simple, easy, and designed around you.</span></p>
                            <section className='heroButtonContainer'>
                                <LandingButton redirectLink='https://www.vagaro.com/lunalashandbeautyco' buttonText='Book Now' />
                                <LandingButton redirectLink='/services' buttonText='View Menu' />
                            </section>
                        </section >
                        <section className='heroImages'>
                            <img src={HeroImageOne} alt="" className='landingImage one' />
                            <img src={HeroImageTwo} alt="" className='landingImage two' />
                        </section>
                    </section >
                </>
        </div >
    );
};

interface LandingButtonProps {
    redirectLink: string;
    buttonText: string;
}

const LandingButton: React.FC<LandingButtonProps> = ({ redirectLink, buttonText }) => {

    return (
        <a href={redirectLink} className='landingButton'>{buttonText}<img src={HeroArrow} alt=''></img> </a>
    );
};

export default Hero;
