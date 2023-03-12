import React from "react";
import "./HeaderHamburger.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HamburgerProps {
  toggleNavbar: () => void;
}

const HeaderHamburger = ({toggleNavbar}: HamburgerProps) => {
  return (
    <div className="hamburger-main-container">
      <div className="header-logo">MIKO</div>
      <div onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} className="hamburger-logo" />
      </div>
    </div>
  );
};

export default HeaderHamburger;
