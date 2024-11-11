import React, { useEffect, useState } from "react";
import CircleArrow from '../images/circle-arrow.svg';
import PlusButton from '../images/plusButton.svg';
import { lashServices, browServices } from './serviceInfo.js';

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

interface ServicesContainerProps {

}

const ServicesContainer: React.FC = () => {
    const services = lashServices;

    // Toggle function to expand/collapse subservices for a specific service
    function expandServiceBox(index: number) {
        const subServicesElement = document.querySelector(
            `.subServices[data-index='${index}']`
        ) as HTMLElement;

        // Toggle the 'visible' class on the selected element
        if (subServicesElement) {
            subServicesElement.classList.toggle('visible');
        }
    }

    const servicesList = services.map((service, index) => (
        <div className="serviceItem" key={service.title}>
            <div className="serviceInfo">
                <div className="serviceInfoHolder top">
                    <p className="serviceItemInfo title">{service.title}</p>
                    <p className="serviceItemInfo">${service.price}</p>
                </div>

                {service.subServices && (
                    <div className="subServices" data-index={index}>
                        {service.subServices.map((subService, subIndex) => (
                            <div key={subIndex} className="serviceInfoHolder">
                                <p className="serviceItemInfo sub">{subService.title}</p>
                                {subService.price && (
                                    <p className="serviceItemInfo sub">${subService.price}</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {service.subServices && (
                <button className="serviceToggle" onClick={() => expandServiceBox(index)}><img src={PlusButton} alt="Expand" /></button>
            )}
        </div>
    ));
    return (
        <section className="servicesContainer">{servicesList}</section>
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

            <h2 className="currentServiceTab" id='currentServiceTab'>{serviceTabOptions[currentService]}</h2>

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
