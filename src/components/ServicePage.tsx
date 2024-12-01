import React, { useEffect, useState } from "react";
import CircleArrow from '../images/circle-arrow.svg';
import PlusButton from '../images/plusButton.svg';
import { lashServices, lashLifts, browServices, waxServices, facialServices } from './serviceInfo';

const ServicePage: React.FC = () => {
    const [currentService, setCurrentService] = useState(0);

    return (
        <section className="services" id='services'>
            <MobileLayout currentService={currentService} updateCurrentService={setCurrentService} />
            <ServicesContainer currentService={currentService} updateCurrentService={setCurrentService} />
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
        <section className="servicesNavBar" >
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
                <img src={CircleArrow} alt="Next Service" className="circleButtonImg" />
            </button>
        </section>
    );
};


const ServicesContainer: React.FC<{ currentService: number; updateCurrentService: (newIndex: number) => void; }> = ({ currentService, updateCurrentService }) => {

    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 50 && currentService > 0) {
                updateCurrentService(currentService - 1);
            } else if (diffX < -50 && currentService < 4) {
                updateCurrentService(currentService + 1);
            }
        }
    };

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

    return (
        <section id='servicesContainer' className="servicesContainer fade-in" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            {servicesList}
        </section>
    );
};



export default ServicePage;
