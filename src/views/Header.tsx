import React from "react";

import "./Header.css";

import AnimatedButton from "./AnimatedButton";

interface HeaderProps {
  handleAboutClick: () => void;
}

const Header = ({ handleAboutClick }: HeaderProps) => {
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
        <div className="header-btn-text-spacing">
          <AnimatedButton />
        </div>
      </div>
    </div>
  );
};

export default Header;