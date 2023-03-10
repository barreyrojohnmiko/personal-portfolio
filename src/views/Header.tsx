import React from "react";
import "./Header.css";

import AnimatedButton from "./AnimatedButton";

interface HeaderProps {
  handleAboutClick: () => void;
  handleContactClick: () => void;
}

const Header = ({ handleAboutClick, handleContactClick }: HeaderProps) => {
  return (
    <div className="header-main-container">
      <div className="header-logo">MIKO</div>
      <div className="header-menu">
        <div className="header-btn-text-spacing">
          <button className="header-btn-text header-btn-border" onClick={handleAboutClick}> About</button>
        </div>
        <div className="header-btn-text-spacing">
          <button className="header-btn-text header-btn-border">Experience</button>
        </div>
        <div className="header-btn-text-spacing">
          <button className="header-btn-text header-btn-border">Works</button>
        </div>
        <div className="header-btn-text-spacing">
          <AnimatedButton animatedButtonClick={handleContactClick} />
        </div>
      </div>
    </div>
  );
};

export default Header;
