import React, { RefObject } from "react";
import "./Contact.css";

import SendMessageButton from "../../views/SendMessageButton";

type ContactProps = { contactSectionRef: RefObject<HTMLDivElement> };

const Contact: React.FC<ContactProps> = ({ contactSectionRef }) => {
  return (
    <div className="contact-main-container" ref={contactSectionRef}>
      <div className="contact-header">Get In Touch</div>
      <div className="contact-description">
        Interested in working together? Don't hesitate to leave me a message.
      </div>
      <SendMessageButton />
    </div>
  );
};

export default Contact;
