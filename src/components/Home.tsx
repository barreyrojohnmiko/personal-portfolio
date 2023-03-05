import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Card from "../views/Card";
import AnimatedButton from "../views/AnimatedButton";

const Home = () => {
  const [cardData, setCardData] = useState({
    fName: "Sofia Noreen",
    lName: "Esposo",
    age: 22,
  });

  return (
    <div className="main-component">
      {/* <div>
        <Card {...cardData} />
      </div> */}
      <div className="header">
        <div className="header-logo">MIKO</div>
        <div className="header-menu">
          <div className="header-btn-text-spacing">
            <button className="header-btn-text btn-border">About</button>
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

      <div className="body">
        <div className="about-dev">
          <div className="job-title">Front-end Developer</div>
          <div className="job-description">
            Detail-oriented front-end developer who is passionate about crafting
            engaging user experiences. I take pride in bringing your ideas to
            life with clean and efficient code.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
