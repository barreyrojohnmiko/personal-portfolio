import React, { RefObject } from "react";
import "./About.css";
import devImage from "../../assets/images/Miko.jpg";

type AboutProps = { aboutSectionRef: RefObject<HTMLDivElement> };

const About: React.FC<AboutProps> = ({ aboutSectionRef }) => {
  return (
    <div className="about-main-container" ref={aboutSectionRef}>
      <div className="developer-profile">
        <div className="about-label">&lt;about-me&gt;</div>
        <div className="about-me-content">
          <div className="about-me-sub-container">
            <div className="about-me-text">
              I have a passion for exploring and developing innovative ideas. As
              a naturally curious person, I became interested in coding by
              wondering on how I could hack into my neighbors' Wi-Fi. Although
              this wasn't a part of my formal education in Computer Science, I
              found turning designs into functional websites and applications
              very fulfilling and enjoyable, which ultimately led me to pursue
              programming as a career.
            </div>

            <br></br>

            <div className="about-me-text">
              Today, as a full-time software developer with a specialization in
              mobile development, I have extensive experience working with
              various frameworks such as React and Angular. I'm also proficient in web
              development and have a broad range of skills that extend beyond
              just mobile development.
            </div>

            <br></br>

            <div className="about-me-text">
              Here are a few technologies I’ve been working with recently:
            </div>
            <div className="tech-listing">
              <ul className="tech-listing-spacing">
                <li className="bullet-point">TypeScript</li>
                <li className="bullet-point">ReactJS</li>
                <li className="bullet-point">React Native</li>
                <li className="bullet-point">Git</li>
                <li className="bullet-point">Postman</li>
              </ul>
              <ul className="tech-listing-spacing">
                <li className="bullet-point">JavaScript</li>
                <li className="bullet-point">Angular 15</li>
                <li className="bullet-point">Ionic-Angular</li>
                <li className="bullet-point">Wordpress</li>
              </ul>
            </div>
          </div>
          <div>
            <img className="developer-photo" src={devImage} alt="Dev's Profile Picture" />
          </div>
        </div>
        <div className="about-label">&lt;/about-me&gt;</div>
      </div>
    </div>
  );
};

export default About;
