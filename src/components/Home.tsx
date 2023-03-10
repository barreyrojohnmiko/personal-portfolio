import React, { useRef, useState } from "react";
import "./Home.css";

import About from "./About";
import Sidebar from "../views/Sidebar";
import Header from "../views/Header";
import Contact from "./Contact";
import Footer from "../views/Footer";
import Introduction from "./Introduction";
import HeaderHamburger from "../views/HeaderHamburger";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: aboutSectionRef.current.offsetTop - 20,
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

  const handleOpenNavbar = () => {
    setNavbarOpen(true);
  };

  const closeOpenNavbar = () => {
    setNavbarOpen(false);
  };

  const renderNavbar = () => {
    return (
      <div className="navbar-section">
        <div className="navbar-header-container">
          <div onClick={closeOpenNavbar}>
            <FontAwesomeIcon icon={faX} className="hamburger-logo" />
          </div>
        </div>
        <div className="navbar-menu-container">
          <div className="navbar-btn-text-spacing">
            <button className="navbar-btn-text navbar-btn-border">About</button>
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
            <button className="navbar-btn-text navbar-btn-border">
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
      <div className="content-section">
        <div className="header-section">
          <Header
            handleAboutClick={handleAboutClick}
            handleContactClick={handleContactClick}
          />
        </div>
        {navbarOpen ? renderNavbar() : null}
        <div className="header-hamburger-section">
          <HeaderHamburger handleOpenNavbar={handleOpenNavbar} />
        </div>
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
  );
};

export default Home;
