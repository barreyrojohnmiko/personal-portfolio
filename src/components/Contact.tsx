import React, { RefObject } from "react";
import "./Contact.css";

type ContactProps = {
  contactSectionRef: RefObject<HTMLDivElement>;
};

const Contact: React.FC<ContactProps> = ({ contactSectionRef }) => {
  return (
    <div className="main-contact-container" ref={contactSectionRef}>
      <div className="contact-body">
        <div className="contact-flex-container">
          <div className="contact-label">Get In Touch</div>
          <div className="contact-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
            neque, blanditiis delectus voluptatibus, facilis praesentium iste
            aperiam debitis vitae alias obcaecati reprehenderit doloribus fuga
            assumenda enim ullam animi itaque quidem.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
