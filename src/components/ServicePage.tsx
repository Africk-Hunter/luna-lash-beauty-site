import React, { useState } from "react";
import CircleArrow from '../images/circle-arrow.svg';
import PlusButton from '../images/plusButton.svg';
import { lashServices, lashLifts, browServices, waxServices, facialServices } from './serviceInfo';

interface ServicePageProps { }

const ServicePage: React.FC<ServicePageProps> = () => {
    const [currentService, setCurrentService] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);


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
            if (diffX < -50 && currentService < 4) {
                setCurrentService(currentService + 1);
            }
            else if (diffX > 50 && currentService > 0) {
                setCurrentService(currentService - 1);
            }
        }
    };

    return (
        <section className="services" id="services" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <MobileLayout currentService={currentService} updateCurrentService={setCurrentService} />
            <ServicesContainer currentService={currentService} />
        </section>
    );
};

interface MobileLayoutProps {
    currentService: number;
    updateCurrentService: (newIndex: number) => void;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ currentService, updateCurrentService }) => {
    const serviceTabOptions = [
        'Eyelash Extensions',
        'Lash Lifts',
        'Brow Services',
        'Waxing',
        'Facials'
    ];

    const maxService = 4;

    const updateServiceFunc = (plusOrMinus: 'plus' | 'minus') => {
        if (plusOrMinus === 'plus' && currentService < maxService) {
            updateCurrentService(currentService + 1);
        } else if (plusOrMinus === 'minus' && currentService > 0) {
            updateCurrentService(currentService - 1);
        }
    };

    return (
        <section className="servicesNavBar">
            <button
                className={`circleButton left ${currentService === 0 ? 'unset' : ''}`}
                onClick={() => updateServiceFunc('minus')}
                disabled={currentService === 0}
            >
                <img src={CircleArrow} alt="Previous Service" className="circleButtonImg" />
            </button>

            <h2 className="currentServiceTab" id="currentServiceTab">
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

interface SubService {
    title: string;
    price: number | null;
}

interface Service {
    title: string;
    price: number;
    subServices?: SubService[];
}

interface ServicesContainerProps {
    currentService: number;
}

const ServicesContainer: React.FC<ServicesContainerProps> = ({ currentService }) => {
    let services: Service[] = [];

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

    const servicesList = services.map((service) => (
        <div className="serviceItem" key={service.title}>
            <div className="serviceInfo">
                <div className="serviceInfoHolder top">
                    <p className="serviceItemInfo title">{service.title}</p>
                    <p className="serviceItemInfo">${service.price}</p>
                </div>
            </div>
        </div>
    ));

    return (
        <section id="servicesContainer" className="servicesContainer">
            {servicesList}
        </section>
    );
};

export default ServicePage;
