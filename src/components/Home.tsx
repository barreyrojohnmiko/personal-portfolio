import React, { useRef } from "react";

import "./Home.css";
import About from "./About";
import Sidebar from "../views/Sidebar";
import Header from "../views/Header";

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop + 500,
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
        <Header handleAboutClick={handleAboutClick} />
        <div id="about-section" ref={aboutSectionRef}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Home;
