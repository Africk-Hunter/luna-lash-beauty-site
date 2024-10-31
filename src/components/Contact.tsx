import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact" id='contact'>
      <div className="contactSectionWrapper">
        <section className="contactFormWrapper">
          <ContactForm />
        </section>
        <section className="companyInformationWrapper">
          {/* Contact us */}
          {/* Our Hours */}
        </section>
      </div>
    </div>
  );
};

const ContactForm: React.FC = () => {
  return (
    <>
      <h1 className="contactCTAHeader">Drop us a line!</h1>
      <input placeholder="Name" className="contactInput"></input>
      <input placeholder="Email Address" className="contactInput"></input>
      <input placeholder="Phone Number" className="contactInput"></input>
      <textarea placeholder="Other Notes" className="contactInput textarea"></textarea>
      <button className="contactSubmitButton">Send</button>
    </>
  );
};

interface HeaderAndTextProps {
  text: Array<string>;
}

const HeaderAndText: React.FC<HeaderAndTextProps> = ({ text }) => {
  return (
    <></>
  );
};


export default Contact;
