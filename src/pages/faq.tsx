import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PlusButton from '../images/plusButton.svg';
import MinusButton from '../images/minusButton.svg';
import '../styles/index.scss';

const answers = ['1. Avoid caffeine on the day of your service for the best results. \n\n2. Ensure at least 3-4 weeks of hair growth for optimal waxing. \n\n3. Exfoliate your skin 24 hours before your appointment to prepare. \n\n4. Take a warm shower about an hour before your appointment to soften the skin.',
  'Please provide a 24 hour notice for cancellations. Cancellations within 24 hours will incur a 50% charge for missed services. No-call/no-show appointments will be charged 100%.',
  'Eyelash extensions are semi-permanent lashes applied to your natural lashes for added length and volume, eliminating the need for mascara or eye makeup.'
]

const FAQ: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="faq">
        <div className='AbtbackgroundShapeOne'></div>
        <div className='AbtbackgroundShapeTwo'></div>
        <div className='AbtbackgroundShapeThree'></div>
        <h2 className="pageTitle">Frequently Asked Questions</h2>
        <section className="faqHolder">
          <Question question='How should I prepare for my Brazilian Wax?' answer={answers[0]} isOpen={true} />
          <Question question='What is our cancellation policy?' answer={answers[1]} isOpen={false} />
          <Question question='What are eyelash extensions?' answer={answers[2]} isOpen={false} />
        </section>
      </div>
      <Footer />
    </>
  );
};

interface QuestionProps {
  question: string;
  answer: string;
  isOpen: boolean;
}

const Question: React.FC<QuestionProps> = ({ question, answer, isOpen }) => {
  const [open, setopen] = useState(isOpen);

  const toggleAnswer = () => setopen(!open);

  return (
    <div className="faqItem">
      <div className="titleBar">
        <h2 className="question">{question}</h2>
        <button className="toggleAnswer" onClick={toggleAnswer}>
          <img src={open ? MinusButton : PlusButton} alt={open ? "Collapse" : "Expand"} className="togglePic" />
        </button>
      </div>
      <p className={`answer ${open ? "revealed" : ""}`}>
        {answer}
      </p>
    </div>
  );
};


export default FAQ;
