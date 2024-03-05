import "./styles.scss";

import React, { RefObject } from "react";

import devImage from "../../assets/images/Miko.jpg";

type AboutProps = { aboutMeSectionRef: RefObject<HTMLDivElement> };

const techList = [
  "ReactJS (CRA & Vite)",
  "Angular",
  "React Native",
  "Ionic-Angular",

  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SCSS",
  "Bootstrap",
  "Material-UI",
  
  "Postman",

  ".NET Core 6.0 C#",
  "SQL",
  "MSSQL",
  "SQLite",
  "Firebase",

  "Jasmine",
  "Karma",
  "TestBed",
  "Cypress",

  "Git",
  "GitHub",
  "GitLab",
  "Azure",

  "Figma",

  "WordPress",
];

const AboutComponent: React.FC<AboutProps> = ({ aboutMeSectionRef }) => {
  return (
    <div className="about-main-container" ref={aboutMeSectionRef}>
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

            <div className="about-me-text">
              Today, as a full-time software developer with a specialization in
              mobile development, I have extensive experience working with
              various frameworks such as React and Angular. I'm also proficient
              in web development and have a broad range of skills that extend
              beyond just mobile development.
            </div>

            <div className="tech-container">
              <div className="about-me-text">
                Here are a few technologies I’ve been working with recently:
              </div>

              <div className="tech-listing">
                {techList.map((tech, index) => (
                  <div className="tech-stack-panel" key={index}>
                    <div>{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <img className="developer-photo" src={devImage} alt="Dev's Profile" />
        </div>

        <div className="about-label">&lt;/about-me&gt;</div>
      </div>
    </div>
  );
};

export default AboutComponent;
