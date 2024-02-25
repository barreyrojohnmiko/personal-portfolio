import "./styles.scss";

import { useEffect } from "react";

import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import {
  setIsHeaderVisible,
  setPrevScrollPos,
} from "../../redux/views/header/action";

import AnimatedButtonView from "../animatedButton/AnimatedButton";

import HeaderObject from "../../objects/interface/HeaderObject";

const Header = (props: HeaderObject) => {
  const dispatch: any = useDispatch();
  const { isNavbarOpen, isMobileView } = useSelector(
    (state: any) => state.homeReducers
  );
  const { isHeaderVisible, prevScrollPos } = useSelector(
    (state: any) => state.headerReducers
  );

  // Header reactive on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      dispatch(
        setIsHeaderVisible(
          prevScrollPos > currentScrollPos || currentScrollPos <= 5
        )
      );
      dispatch(setPrevScrollPos(currentScrollPos));
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [prevScrollPos, isHeaderVisible]);

  const renderNavMenuPanel = (onClick: any, label: string) => {
    return (
      <div>
        <button className="navbar-btn-text navbar-btn-border" onClick={onClick}>
          {label}
        </button>
      </div>
    );
  };

  const renderHeaderMenuPanel = (onClick: any, label: string) => {
    return (
      <button className="header-btn-text header-btn-border" onClick={onClick}>
        {label}
      </button>
    );
  };

  return (
    <>
      {isMobileView ? (
        <>
          <header
            className={`header ${
              isHeaderVisible ? "header--visible" : "header--hidden"
            }`}
          >
            <div className="hamburger-main-wrapper">
              <div className="header-logo">MIKO</div>

              <button onClick={props.toggleNavbar}>
                <FontAwesomeIcon icon={faBars} className="hamburger-logo" />
              </button>
            </div>
          </header>

          <div className={`navbar-section ${isNavbarOpen ? "open" : ""}`}>
            <div className="navbar-header-wrapper">
              <button onClick={props.toggleNavbar}>
                <FontAwesomeIcon icon={faX} className="hamburger-logo" />
              </button>
            </div>

            <div className="navbar-menu-wrapper">
              {renderNavMenuPanel(props.handleAboutClick, "About")}

              {renderNavMenuPanel(props.handleWorksClick, "Works")}

              {renderNavMenuPanel(props.handleContactClick, "Contact")}

              {renderNavMenuPanel(props.handleResumeClick, "Resume")}
            </div>
          </div>
        </>
      ) : (
        <header
          className={`header ${
            isHeaderVisible ? "header--visible" : "header--hidden"
          }`}
        >
          <div className="header-main-wrapper">
            <div className="header-logo">MIKO</div>

            <div className="header-menu">
              {renderHeaderMenuPanel(props.handleAboutClick, "About")}

              {renderHeaderMenuPanel(props.handleWorksClick, "Projects")}

              {renderHeaderMenuPanel(props.handleContactClick, "Contact")}

              <AnimatedButtonView
                animatedButtonClick={props.handleResumeClick}
              />
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
