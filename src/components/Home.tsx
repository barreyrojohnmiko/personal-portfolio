import { useEffect, useRef } from "react";
import "./Home.css";

import Footer from "../views/Footer";
import Header from "../views/Header";
import HeaderHamburger from "../views/HeaderHamburger";
import Sidebar from "../views/Sidebar";
import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { setIsNavbarOpen } from "../redux/components/Home/action";

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const dispatch: any = useDispatch();
  const { isNavbarOpen } = useSelector((state: any) => state.homeReducers);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop + 230,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = () => {
    if (contactSectionRef.current) {
      window.scrollTo({
        top: contactSectionRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const toggleNavbar = () => {
    dispatch(setIsNavbarOpen(!isNavbarOpen));
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
    <div className="home-container">
      <div className="sidebar-section">
        <Sidebar />
      </div>
      <div className="content-main-section">
        <div className="header-section">
          <Header
            handleAboutClick={handleAboutClick}
            handleContactClick={handleContactClick}
          />
        </div>
        <div className="header-hamburger-section">
          <HeaderHamburger toggleNavbar={toggleNavbar} />
          {renderNavbar()}
        </div>
        <div className={`content-sub-section ${isNavbarOpen ? "open" : ""}`}>
          <div className="introduction-section">
            <Introduction />
          </div>
          <div className="about-section">
            <About aboutSectionRef={aboutSectionRef} />
          </div>
          <div className="contact-section">
            <Contact contactSectionRef={contactSectionRef} />
          </div>
          <div className="footer-section">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
