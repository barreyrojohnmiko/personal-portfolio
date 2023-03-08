import React, { useRef } from "react";
import "./Home.css";

import About from "./About";
import Sidebar from "../views/Sidebar";
import Header from "../views/Header";
import Contact from "./Contact";

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = () => {
    if (contactSectionRef.current) {
      window.scrollTo({
        top: contactSectionRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="main-component">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="header-container">
        <Header handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
        <div>
          <About aboutSectionRef={aboutSectionRef} />
        </div>
        <div className="contact-container">
          <Contact contactSectionRef={contactSectionRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
