import { useEffect } from "react";
import "./Header.css";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimatedButton from "./AnimatedButton";

import { useSelector, useDispatch } from "react-redux";
import { setIsHeaderVisible, setPrevScrollPos } from "../redux/views/header/action";

interface HeaderProps {
  handleAboutClick: () => void;
  handleWorksClick: () => void;
  handleContactClick: () => void;
  toggleNavbar: () => void;
}

const Header = ({ handleAboutClick, handleWorksClick, handleContactClick, toggleNavbar }: HeaderProps) => {
  const dispatch: any = useDispatch();
  const { isNavbarOpen, isMobileView } = useSelector((state: any) => state.homeReducers);
  const { isHeaderVisible, prevScrollPos } = useSelector((state: any) => state.headerReducers);

  const renderDesktopHeader = () => {
    return (
      <header className={`header ${isHeaderVisible ? "header--visible" : "header--hidden"}`}>
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
              <button className="header-btn-text header-btn-border" onClick={handleWorksClick}>Works</button>
            </div>
            <div className="header-btn-text-spacing">
              <AnimatedButton animatedButtonClick={handleContactClick} />
            </div>
          </div>
        </div>
      </header>
    );
  };

  const renderMobileHeader = () => {
    return (
      <header className={`header ${isHeaderVisible ? "header--visible" : "header--hidden"}`}>
        <div className="hamburger-main-container">
          <div className="header-logo">MIKO</div>
          <div onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} className="hamburger-logo" />
          </div>
        </div>
      </header>
    );
  };

  // Header reactive on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      dispatch(setIsHeaderVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10));
      dispatch(setPrevScrollPos(currentScrollPos));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isHeaderVisible]);

  useEffect(() => {
    const introductionSection = document.querySelector(".introduction-section") as HTMLElement;
    if (introductionSection) {
      introductionSection.style.paddingTop = `${isHeaderVisible ? "140px" : "45px"}`;
    }
  }, [isHeaderVisible]);

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
            <button className="navbar-btn-text navbar-btn-border" onClick={handleAboutClick}>
              About
            </button>
          </div>
          <div className="navbar-btn-text-spacing">
            <button className="navbar-btn-text navbar-btn-border">
              Experience
            </button>
          </div>
          <div className="navbar-btn-text-spacing">
            <button className="navbar-btn-text navbar-btn-border" onClick={handleWorksClick}>Works</button>
          </div>
          <div className="navbar-btn-text-spacing">
            <button className="navbar-btn-text navbar-btn-border" onClick={handleContactClick}>
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
