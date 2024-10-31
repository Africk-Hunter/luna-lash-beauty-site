import React from "react";

const contactInfo = ['(530) 208-8172', '@Lunalashandbeautyco', '6165 Ridgeview Court, Reno']
const hours = ['Monday - Closed', 'Tuesday - 11:00am - 7:00pm', 'Wednesday - 11:00am - 7:00pm', 'Thursday - 11:00am - 7:00pm', 'Friday - 11:00am - 7:00pm', 'Saturday - 10:00am - 4:00pm', 'Sunday - Closed']

const Contact: React.FC = () => {
  return (
    <div className="contact" id='contact'>
      <div className="contactSectionWrapper">
        <section className="contactFormWrapper">
          <ContactForm />
        </section>
        <section className="companyInformationWrapper">
          <HeaderAndText header='Contact Us' texts={contactInfo} />
          <HeaderAndText header='Our Hours' texts={hours} />
        </section>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <>
      <h1 className="contactHeader">Drop us a line!</h1>
      <input placeholder="Name" className="contactInput"></input>
      <input placeholder="Email Address" className="contactInput"></input>
      <input placeholder="Phone Number" className="contactInput"></input>
      <textarea placeholder="Other Notes" className="contactInput textarea"></textarea>
      <button className="contactSubmitButton">Send</button>
    </>
  );
};

interface HeaderAndTextProps {
  header: string;
  texts: Array<string>;
}

const HeaderAndText: React.FC<HeaderAndTextProps> = ({ header, texts }) => {

  const textList = texts.map((text) =>
    <p className="contactParagraph">{text}</p>
  );
  return (
    <div className="headerAndTextContainer">
      <h1 className="contactHeader">{header}</h1>
      {textList}
    </div>
  );
};


export default Contact;
