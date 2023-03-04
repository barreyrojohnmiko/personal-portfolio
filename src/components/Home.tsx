import React, { useState} from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import Card from "../views/Card";

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
          <Link to="/about" className="btn-about-link">
            <button className="header-btn-text btn-about">About</button>
          </Link>
          <Link to="/portfolio" className="btn-resume-link">
            <button className="header-btn-text btn-resume">Portfolio</button>
          </Link>
          <Link to="/contact" className="btn-contact-link">
            <button className="header-btn-text btn-contact">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
