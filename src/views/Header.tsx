import React, { useRef } from "react";

import "./Header.css";

import AnimatedButton from "./AnimatedButton";

const Header = () => {
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
    <div className="header">
      <div className="header-logo">MIKO</div>
      <div className="header-menu">
        <div className="header-btn-text-spacing">
          <button
            className="header-btn-text btn-border"
            onClick={handleAboutClick}
          >
            About
          </button>
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
  );
};

export default Header;
