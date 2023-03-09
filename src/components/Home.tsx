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
        top: aboutSectionRef.current.offsetTop - 20,
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
    <div className="home-container">
      <div className="sidebar-section">
        <Sidebar />
      </div>
      <div className="header-section">
        <Header handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
        <div>
          <About aboutSectionRef={aboutSectionRef} />
        </div>
        <div className="contact-section">
          <Contact contactSectionRef={contactSectionRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
