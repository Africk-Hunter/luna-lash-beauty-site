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
      <textarea placeholder="Your Name"></textarea>
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
