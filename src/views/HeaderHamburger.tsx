import React from "react";
import "./HeaderHamburger.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HamburgerProps {
    handleOpenNavbar: () => void;
}

const HeaderHamburger = ({handleOpenNavbar}: HamburgerProps) => {
  return (
    <div className="hamburger-main-container">
      <div className="header-logo">MIKO</div>
      <div onClick={handleOpenNavbar}>
        <FontAwesomeIcon icon={faBars} className="hamburger-logo" />
      </div>
    </div>
  );
};

export default HeaderHamburger;
