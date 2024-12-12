import React, { useState, useEffect } from "react";
import CircleArrow from '../images/circle-arrow.svg';
import PlusButton from '../images/plusButton.svg';
import MinusButton from '../images/minusButton.svg';
import { lashServices, lashLifts, browServices, waxServices, facialServices } from './serviceInfo';

interface ServicePageProps { }

let serviceTabOptions = [
    'Eyelash Extensions',
    'Lash Lifts',
    'Brow Services',
    'Waxing',
    'Facials',
];
let initialized = false;

const ServicePage: React.FC<ServicePageProps> = () => {
    const [currentService, setCurrentService] = useState<number>(0);
    const [startX, setStartX] = useState<number>(0);
    const [startY, setStartY] = useState<number>(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        if (Math.abs(currentX - startX) > Math.abs(currentY - startY)) {
            e.preventDefault();
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;

        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < -50 && currentService < 4) {
                setCurrentService(currentService + 1);
            } else if (diffX > 50 && currentService > 0) {
                setCurrentService(currentService - 1);
            }
        }
    };

    return (
        <section
            className="services"
            id="services"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className='SrvbackgroundShapeOne'></div>
            <div className='SrvbackgroundShapeTwo'></div>
            <div className='SrvbackgroundShapeThree'></div>
            <MainLayout currentService={currentService} updateCurrentService={setCurrentService} />
            <ServicesContainer currentService={currentService} />
        </section>
    );
};

interface MainLayoutProps {
    currentService: number;
    updateCurrentService: (newIndex: number) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ currentService, updateCurrentService }) => {

    const [windowWidth, setWindowWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);

        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxService = 4;

    const updateServiceFunc = (plusOrMinus: 'plus' | 'minus' | number) => {
        if (plusOrMinus === 'plus' && currentService < maxService) {
            updateCurrentService(currentService + 1);
        } else if (plusOrMinus === 'minus' && currentService > 0) {
            updateCurrentService(currentService - 1);
        } else if (typeof plusOrMinus === 'number') {
            updateCurrentService(plusOrMinus);
        }
    };
    if (windowWidth > 768) {
        serviceTabOptions = [
            'Brow Services',
            'Lash Lifts',
            'Eyelash Extensions',
            'Waxing',
            'Facials',
        ]
        if (!initialized) {
            updateServiceFunc(2)
            initialized = true;
        }
    }
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
                {windowWidth < 768 ? (
                    <>
                        {serviceTabOptions[currentService]}
                    </>
                ) : (
                    <>

                        {serviceTabOptions.map((serviceType, index) => (
                            <button
                                key={index}
                                className={`currentServiceButton ${index === currentService ? 'active' : ''}`}
                                onClick={() => updateServiceFunc(index)}
                            >
                                {serviceType}
                            </button>
                        ))}
                    </>
                )}
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
    const [services, setServices] = useState<Service[]>([]);
    const [animationState, setAnimationState] = useState<'fade-in' | 'fade-out'>('fade-in');

    useEffect(() => {
        setAnimationState('fade-out');
        const timer = setTimeout(() => {
            const isDesktop = window.innerWidth > 768;
            switch (currentService) {
                case 0:
                    setServices(isDesktop ? browServices : lashServices);
                    break;
                case 1:
                    setServices(lashLifts);
                    break;
                case 2:
                    setServices(isDesktop ? lashServices : browServices);
                    break;
                case 3:
                    setServices(waxServices);
                    break;
                case 4:
                    setServices(facialServices);
                    break;
                default:
                    setServices([]);
                    break;
            }
            setAnimationState('fade-in');
        }, 350);

        return () => clearTimeout(timer);
    }, [currentService]);

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
        <section id="servicesContainer" className={`servicesContainer ${animationState}`}>
            {servicesList}
        </section>
    );
};

export default ServicePage;
