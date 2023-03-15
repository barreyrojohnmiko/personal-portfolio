import "./Header.css";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedButton from "./AnimatedButton";

import { useSelector } from "react-redux";

interface HeaderProps {
  handleAboutClick: () => void;
  handleContactClick: () => void;
  toggleNavbar: () => void;
}

const Header = ({
  handleAboutClick,
  handleContactClick,
  toggleNavbar,
}: HeaderProps) => {
  const { isNavbarOpen, isMobileView } = useSelector(
    (state: any) => state.homeReducers
  );

  const renderDesktopHeader = () => {
    return (
      <div className="header-main-container">
        <div className="header-logo">MIKO</div>
        <div className="header-menu">
          <div className="header-btn-text-spacing">
            <button
              className="header-btn-text header-btn-border"
              onClick={handleAboutClick}
            >
              About
            </button>
          </div>
          <div className="header-btn-text-spacing">
            <button className="header-btn-text header-btn-border">
              Experience
            </button>
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

  const renderMobileHeader = () => {
    return (
      <div className="hamburger-main-container">
        <div className="header-logo">MIKO</div>
        <div onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} className="hamburger-logo" />
        </div>
      </div>
    );
  };

  const renderNavbar = () => {
    return (
      <div className={`navbar-section ${isNavbarOpen ? "open" : ""}`}>
        <div className="navbar-header-container">
          <div onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faX} className="hamburger-logo" />
          </div>
        </div>
        <div className="navbar-menu-container">
          <div className="navbar-btn-text-spacing">
            <button
              className="navbar-btn-text navbar-btn-border"
              onClick={handleAboutClick}
            >
              About
            </button>
          </div>
          <div className="navbar-btn-text-spacing">
            <button className="navbar-btn-text navbar-btn-border">
              Experience
            </button>
          </div>
          <div className="navbar-btn-text-spacing">
            <button className="navbar-btn-text navbar-btn-border">Works</button>
          </div>
          <div className="navbar-btn-text-spacing">
            <button
              className="navbar-btn-text navbar-btn-border"
              onClick={handleContactClick}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isMobileView ? (
        <>
          {renderMobileHeader()}
          {renderNavbar()}
        </>
      ) : (
        <>{renderDesktopHeader()}</>
      )}
    </>
  );
};

export default Header;
