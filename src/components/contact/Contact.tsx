import React, { RefObject } from "react";
import "./Contact.css";

import SendMessageButton from "../../views/sendMessageButton/SendMessageButton";
import Footer from "../../views/footer/Footer";

type ContactProps = { contactSectionRef: RefObject<HTMLDivElement> };

const handleSendMessageButtonClick = () => {
  window.open(
    "https://mail.google.com/mail/?view=cm&fs=1&to=barreyrojohnmiko@gmail.com",
    "_blank",
    "noopener,noreferrer"
  );
};

const Contact: React.FC<ContactProps> = ({ contactSectionRef }) => {
  return (
    <div className="contact-main-container" ref={contactSectionRef}>
      <div className="contact-header">Get In Touch</div>
      <div className="contact-description">
        Interested in working together? Don't hesitate to leave me a message.
      </div>
      <div>
        <SendMessageButton handleSendMessageButtonClick={handleSendMessageButtonClick} />
      </div>
    </div>
  );
};

export default Contact;
