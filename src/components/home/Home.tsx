import { useEffect, useRef } from "react";
import "./Home.css";

import Footer from "../../views/footer/Footer";
import Header from "../../views/header/Header";
import Sidebar from "../../views/sidebar/Sidebar";
import About from "../about/About";
import Contact from "../contact/Contact";
import Works from "../works/Works";

import { useDispatch, useSelector } from "react-redux";
import {
  setIsMobileView,
  setIsNavbarOpen,
} from "../../redux/components/home/action";

const Home = () => {
  const dispatch: any = useDispatch();
  const { isNavbarOpen, isMobileView } = useSelector(
    (state: any) => state.homeReducers
  );

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const worksSectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: isMobileView
          ? aboutSectionRef.current.offsetTop - 25 // Mobile View
          : aboutSectionRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const handleWorksClick = () => {
    if (worksSectionRef.current) {
      window.scrollTo({
        top: isMobileView
          ? worksSectionRef.current.offsetTop - 25
          : worksSectionRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const handleContactClick = () => {
    if (contactSectionRef.current) {
      window.scrollTo({
        top: contactSectionRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1srIhNxPqkJE3tgj0nWWtpwm6zG7eByqS/view?usp=sharinga",
      "_blank"
    );
  };

  const toggleNavbar = () => {
    dispatch(setIsNavbarOpen(!isNavbarOpen));
  };

  useEffect(() => {
    const handleResize = () => {
      const mobileView = 1023;
      const screenWidth = window.innerWidth;
      dispatch(setIsMobileView(screenWidth <= mobileView));
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="sidebar-section">
        <Sidebar />
      </div>

      <div className="content-main-section">
        <div className="header-section">
          <Header
            handleAboutClick={handleAboutClick}
            handleWorksClick={handleWorksClick}
            handleContactClick={handleContactClick}
            handleResumeClick={handleResumeClick}
            toggleNavbar={toggleNavbar}
          />
        </div>
        
        <div className={`content-sub-section ${isNavbarOpen ? "open" : ""}`}>
          <div className="introduction-section">
            <div className="introduction-main-container">
              <div className="greetings"> Hello, my name is </div>
              <div className="full-name"> Barreyro, John Miko</div>
              <div className="job-description">
                I'm a software developer who is passionate about crafting
                engaging user experiences. I take pride in bringing your ideas
                to life with clean and efficient code.
              </div>
            </div>
          </div>

          <div className="about-section content-section-padding">
            <About aboutSectionRef={aboutSectionRef} />
          </div>
          <div className="works-section content-section-padding">
            <Works worksSectionRef={worksSectionRef} />
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
