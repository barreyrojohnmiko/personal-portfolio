import { useEffect, useRef } from "react";
import "./Home.css";

import Footer from "../views/Footer";
import Header from "../views/Header";
import Sidebar from "../views/Sidebar";
import About from "./About";
import Contact from "./Contact";
import Introduction from "./Introduction";


import { useDispatch, useSelector } from "react-redux";
import { setIsMobileView, setIsNavbarOpen } from "../redux/components/Home/action";

const Home = () => {
  const dispatch: any = useDispatch();
  const { isNavbarOpen, isMobileView } = useSelector((state: any) => state.homeReducers);

  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

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
            handleContactClick={handleContactClick}
            toggleNavbar={toggleNavbar}
          />
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
