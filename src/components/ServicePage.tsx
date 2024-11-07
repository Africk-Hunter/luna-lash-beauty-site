import React, { useEffect, useState } from "react";
import CircleArrow from '../images/circle-arrow.svg';

const ServicePage: React.FC = () => {
    return (
        <section className="services" id='services'>
            <section className="servicesNavBar">
                <MobileLayout />
            </section>
            <ServicesContainer />
        </section>
    );
};

const ServicesContainer: React.FC = () => {
    return (
        <section className="servicesContainer">

        </section>
    );
};

const MobileLayout: React.FC = () => {
    const serviceTabOptions = [
        'Eyelash Extensions',
        'Lash Lifts',
        'Brow Services',
        'Waxing',
        'Facials'
    ]
    const [currentService, updateCurrentService] = useState(0);
    const maxService = 4;

    function updateServiceFunc(plusOrMinus: string) {
        if (plusOrMinus === 'plus' && currentService < 4) {
            updateCurrentService(currentService + 1);
            console.log(currentService)
        } else if (plusOrMinus === 'minus' && currentService > 0) {
            updateCurrentService(currentService - 1);
        }
    }

    return (
        <>
            <button
                className={`circleButton left ${currentService === 0 ? 'unset' : ''}`}
                onClick={() => updateServiceFunc('minus')}
                disabled={currentService === 0}
            >
                <img src={CircleArrow} alt="Previous Service" className="circleButtonImg" />
            </button>

            <h2 className="currentServiceTab">{serviceTabOptions[currentService]}</h2>

            <button
                className={`circleButton right ${currentService === maxService ? 'unset' : ''}`}
                onClick={() => updateServiceFunc('plus')}
                disabled={currentService === maxService}
            >
                <img src={CircleArrow} alt="Next Service" />
            </button>
        </>
    );
};

export default ServicePage;
