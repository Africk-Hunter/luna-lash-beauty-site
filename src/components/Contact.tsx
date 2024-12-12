import React, { useState } from "react";
import emailjs from 'emailjs-com';

const contactInfo = ['(530) 208-8172', '@LunaLashAndBeautyCo', '6165 Ridgeview Court, Reno']
const hours = ['Monday - Closed', 'Tuesday - 11:00am - 7:00pm', 'Wednesday - 11:00am - 7:00pm', 'Thursday - 11:00am - 7:00pm', 'Friday - 11:00am - 7:00pm', 'Saturday - 10:00am - 4:00pm', 'Sunday - Closed']

const Contact: React.FC = () => {

  return (
    <>
      <div className="contact" id='contact'>
        <div className="contactSectionWrapper">
          <ContactForm />
          <section className="companyInformationWrapper">
            <HeaderAndText header='Contact Us' texts={contactInfo} />
            <HeaderAndText header='Our Hours' texts={hours} />
          </section>
        </div>
      </div>
    </>

  );
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      phoneNumber,
      message,
    };

    emailjs.send('service_cxyb1s5', 'template_8qr8o05', templateParams, 'CBZDxMNtzcxxOowCO')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);

        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.log('Error sending email:', error);
      });
  };

  return (
    <form className="contactFormWrapper" onSubmit={handleSubmit}>
      <h1 className="contactHeader">Drop us a line!</h1>
      <input type="text" placeholder="Name" className="contactInput" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email Address" className="contactInput" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone Number" className="contactInput" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <textarea placeholder="Other Notes" className="contactInput textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button type="submit" className="contactSubmitButton">Send</button>
    </form>
  );
};

interface HeaderAndTextProps {
  header: string;
  texts: Array<string>;
}

const HeaderAndText: React.FC<HeaderAndTextProps> = ({ header, texts }) => {

  const textList = texts.map((text) =>
    <p key={text} className="contactParagraph">{text}</p>
  );

  return (
    <div className="headerAndTextContainer">
      <h1 className="contactHeader">{header}</h1>
      {textList}
    </div>
  );
};


export default Contact;
