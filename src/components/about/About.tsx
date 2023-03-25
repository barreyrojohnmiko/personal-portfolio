import React, { RefObject } from "react";
import "./About.css";

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
              found turning my designs into functional websites and applications very fulfilling
              and enjoyable, which ultimately led me to pursue programming as a
              career.
            </div>

            <br></br>

            <div className="about-me-text">
              Today, as a full-time front-end developer with a specialization in
              Android development, I have extensive experience working with
              various frameworks such as React and Angular, as well as essential
              libraries like Redux and Axios. I'm also proficient in web
              development and have a broad range of skills that extend beyond
              just mobile development.
            </div>

            <br></br>

            <div className="about-me-text">
              Here are a few technologies I’ve been working with recently:
            </div>
            <div className="tech-listing">
              <ul className="tech-listing-spacing">
                <li className="bullet-point">JavaScript (ES6+)</li>
                <li className="bullet-point">React Native</li>
                <li className="bullet-point">ReactJS</li>
                <li className="bullet-point">Git</li>
                <li className="bullet-point">Postman</li>
              </ul>
              <ul className="tech-listing-spacing">
                <li className="bullet-point">TypeScript</li>
                <li className="bullet-point">Angular 14</li>
                <li className="bullet-point">Ionic-Angular</li>
                <li className="bullet-point">Wordpress</li>
              </ul>
            </div>
          </div>
          <div>
            <img
              className="developer-photo"
              src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/333323418_723707869240371_5378287988469331409_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGrM4zpMLREqY896Xtj6MpRLXtxpL02TN4te3GkvTZM3gON2VL-JRaM5v2mi-XE271YU9KbdnLyOfpLBoGp0yeR&_nc_ohc=PUJuQHbaFOwAX_Cnym2&_nc_ht=scontent.fmnl17-1.fna&oh=03_AdRlFwXdnKxOuvN8R7SgSsklSoTn6V97sydfn4KTtdvVAw&oe=642BA1B0"
              alt="Dev's Profile Picture"
            />
          </div>
        </div>
        <div className="about-label">&lt;/about-me&gt;</div>
      </div>
    </div>
  );
};

export default About;