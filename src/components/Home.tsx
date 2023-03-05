import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import About from "./About";
import Card from "../views/Card";
import AnimatedButton from "../views/AnimatedButton";

const Home = () => {
  const [cardData, setCardData] = useState({
    fName: "Sofia Noreen",
    lName: "Esposo",
    age: 22,
  });

  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop + 500,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="main-component">
      {/* <div>
        <Card {...cardData} />
      </div> */}
      <div className="header">
        <div className="header-logo">MIKO</div>
        <div className="header-menu">
          <div className="header-btn-text-spacing">
            <button className="header-btn-text btn-border" onClick={handleAboutClick}>About</button>
          </div>
          <div className="header-btn-text-spacing">
            <button className="header-btn-text btn-border">Experience</button>
          </div>
          <div className="header-btn-text-spacing">
            <button className="header-btn-text btn-border">Works</button>
          </div>
          <div className="btn-contact-spacing">
            <AnimatedButton />
          </div>
        </div>
      </div>

      <div id="about-section" ref={aboutSectionRef}>
        <About />
      </div>
    </div>
  );
};

export default Home;
