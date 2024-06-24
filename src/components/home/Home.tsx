import "./styles.scss";

import { useEffect, useRef } from "react";

import HeaderView from "../../views/header/Header";
import AboutComponent from "../about/About";
import ContactComponent from "../contact/Contact";
import ProjectsComponent from "../projects/Projects";

import FooterView from "../../views/footer/Footer";
import SidebarView from "../../views/sidebar/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import {
  setIsMobileView,
  setIsNavbarOpen,
} from "../../redux/components/portfolio/action";

const HomeComponent = () => {
  const dispatch: any = useDispatch();
  const { isNavbarOpen, isMobileView } = useSelector(
    (state: any) => state.portfolioReducers
  );

  const aboutMeSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    if (aboutMeSectionRef.current) {
      window.scrollTo({
        top: isMobileView
          ? aboutMeSectionRef.current.offsetTop - 25
          : aboutMeSectionRef.current.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  const handleProjectsClick = () => {
    if (projectsSectionRef.current) {
      window.scrollTo({
        top: isMobileView
          ? projectsSectionRef.current.offsetTop - 25
          : projectsSectionRef.current.offsetTop - 50,
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
      "https://drive.google.com/file/d/1YM4v4jPupCRrylkBsME0XaVG9Ms8FBYd/view?usp=sharing",
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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="sidebar-section">
        <SidebarView />
      </div>

      <div className="content-main-section">
        <div className="header-section">
          <HeaderView
            handleAboutClick={handleAboutClick}
            handleProjectsClick={handleProjectsClick}
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

          <div className="about-me-section content-section-padding">
            <AboutComponent aboutMeSectionRef={aboutMeSectionRef} />
          </div>

          <div className="projects-section content-section-padding">
            <ProjectsComponent projectsSectionRef={projectsSectionRef} />
          </div>

          <div className="contact-section">
            <ContactComponent contactSectionRef={contactSectionRef} />
          </div>

          <div className="footer-section">
            <FooterView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
