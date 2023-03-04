import React, { useState, useRef } from "react";

import "./Home.css";
import Card from "../views/Card";

const Home = () => {
  const windowHeight = useRef(window.innerHeight);
  const windowWidth = useRef(window.innerWidth);

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
        <div className="header-logo">
          Miko
        </div>
        <div className="header-menu">
          <button className="header-btn-text btn-about">About</button>
          <button className="header-btn-text btn-resume">Portfolio</button>
          <button className="header-btn-text btn-contact">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
