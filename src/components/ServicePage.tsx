import React, { useEffect, useState } from "react";
import CircleArrow from '../images/circle-arrow.svg';
import PlusButton from '../images/plusButton.svg';
import { lashServices, lashLifts, browServices, waxServices, facialServices } from './serviceInfo';

const ServicePage: React.FC = () => {
    const [currentService, setCurrentService] = useState(0); 

    return (
        <section className="services" id='services'>
            <section className="servicesNavBar">
                <MobileLayout
                    currentService={currentService}
                    updateCurrentService={setCurrentService}
                />
            </section>
            <ServicesContainer currentService={currentService} />
        </section>
    );
};


const MobileLayout: React.FC<{
    currentService: number;
    updateCurrentService: (newIndex: number) => void;
}> = ({ currentService, updateCurrentService }) => {
    const serviceTabOptions = [
        'Eyelash Extensions',
        'Lash Lifts',
        'Brow Services',
        'Waxing',
        'Facials'
    ];

    const maxService = 4;

    function updateServiceFunc(plusOrMinus: string) {
        if (plusOrMinus === 'plus' && currentService < maxService) {
            updateCurrentService(currentService + 1);
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

            <h2 className="currentServiceTab" id='currentServiceTab'>
                {serviceTabOptions[currentService]}
            </h2>

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


const ServicesContainer: React.FC<{ currentService: number }> = ({ currentService }) => {

    interface SubService {
        title: string;
        price: number | null;
    }
    
    interface Service {
        title: string;
        price: number;
        subServices?: SubService[];
    }

    let services: Service[];
    
    switch (currentService) {
        case 0:
            services = lashServices;
            break;
        case 1:
            services = lashLifts;
            break;
        case 2:
            services = browServices;
            break;
        case 3:
            services = waxServices;
            break;
        case 4:
            services = facialServices;
            break;
        default:
            services = [];
            break;
    }

    function expandServiceBox(index: number) {
        const subServicesElement = document.querySelector(
            `.subServices[data-index='${index}']`
        ) as HTMLElement;

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
                    <div className={`subServices ${index === 0 ? 'visible' : ''}`} data-index={index}>
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
                <button className="serviceToggle" onClick={() => expandServiceBox(index)}>
                    <img src={PlusButton} alt="Expand" />
                </button>
            )}
        </div>
    ));

    return <section className="servicesContainer">{servicesList}</section>;
};


export default ServicePage;
