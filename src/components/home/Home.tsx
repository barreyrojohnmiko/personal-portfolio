import { useEffect, useRef } from "react";
import "./Home.css";

import Footer from "../../views/footer/Footer";
import Header from "../../views/header/Header";
import Sidebar from "../../views/sidebar/Sidebar";
import About from "../about/About";
import Contact from "../contact/Contact";
import Introduction from "../introduction/Introduction";
import Works from "../works/Works";

import { useDispatch, useSelector } from "react-redux";
import { setIsMobileView, setIsNavbarOpen } from "../../redux/components/home/action";

const Home = () => {
  const dispatch: any = useDispatch();
  const { isNavbarOpen, isMobileView } = useSelector((state: any) => state.homeReducers);

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const worksSectionRef = useRef<HTMLDivElement>(null);

  const handleAboutClick = () => {
    if (aboutSectionRef.current) {
      window.scrollTo({
        top: isMobileView
          ? aboutSectionRef.current.offsetTop + 30
          : aboutSectionRef.current.offsetTop - 130,
        behavior: "smooth",
      });
    }
  };

  const handleExperienceClick = () => {

  }

  const handleWorksClick = () => {
    if (worksSectionRef.current) {
      window.scrollTo({
        top: isMobileView
          ? worksSectionRef.current.offsetTop + 30
          : worksSectionRef.current.offsetTop - 130,
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

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1ij-OKSoNlihLnJBRB1cFXT8Wb3ukocwL/view?usp=share_link', '_blank');
  }

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
            handleExperienceClick={handleExperienceClick}
            handleWorksClick={handleWorksClick}
            handleContactClick={handleContactClick}
            handleResumeClick={handleResumeClick}
            toggleNavbar={toggleNavbar}
          />
        </div>
        <div className={`content-sub-section ${isNavbarOpen ? "open" : ""}`}>
          <div className="introduction-section content-section-padding">
            <Introduction />
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
