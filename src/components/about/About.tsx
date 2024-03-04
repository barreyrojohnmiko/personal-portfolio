import "./styles.scss";

import React, { RefObject } from "react";

import devImage from "../../assets/images/Miko.jpg";

type AboutProps = { aboutMeSectionRef: RefObject<HTMLDivElement> };

const techList1 = [
  "TypeScript",
  "ReactJS",
  "React Native",
  ".NET Core 6.0 C#",
  "Bootstrap",
  "Git",
  "GitHub",
  "Figma",
  "WordPress",
];
const techList2 = [
  "JavaScript",
  "Angular 15",
  "Ionic-Angular",
  "SQL",
  "Postman",
  "Azure",
  "GitLab",
  "SCSS/CSS3",
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

            <br />

            <div className="about-me-text">
              Today, as a full-time software developer with a specialization in
              mobile development, I have extensive experience working with
              various frameworks such as React and Angular. I'm also proficient
              in web development and have a broad range of skills that extend
              beyond just mobile development.
            </div>

            <br />

            <div className="about-me-text">
              Here are a few technologies I’ve been working with recently:
            </div>

            <div className="tech-listing">
              {/*{techList1.map((tech, index) => (
                <div className="tech-stack-panel">
                  <div>{tech}</div>
                </div>
              ))} */}

              <ul className="tech-listing-spacing">
                {techList1.map((tech, index) => (
                  <li className="bullet-point" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>

              <ul className="tech-listing-spacing">
                {techList2.map((tech, index) => (
                  <li className="bullet-point" key={index}>
                    {tech}
                  </li>
                ))}
              </ul>
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
