import React, { useState } from "react";
import "./About.css";

const About = () => {
  return (
    <div className="body">
      <div className="introduction-container">
        <div className="greetings">Hello, my name is</div>
        <div className="full-name"> Barreyro, John Miko.</div>
        <div className="job-role">Web and Mobile Developer</div>
        <div className="job-description">
          I'm a web and mobile front-end developer who is passionate about
          crafting engaging user experiences. I take pride in bringing your
          ideas to life with clean and efficient code.
        </div>
      </div>

      <div className="about-container">
        <div className="dev-profile">
          <div className="label">&lt;about-me&gt;</div>
          <div className="about-me-container">
            <div className="about-me-sub-container">
              <div className="about-me">
                I have a passion for exploring and developing innovative ideas.
                As a naturally curious person, I became interested in
                development by wondering on how I could hack into my neighbors'
                Wi-Fi. Although this wasn't a part of my formal education in
                Computer Science, I found turning my designs into functional
                websites very fulfilling and enjoyable, which ultimately led me
                to pursue programming as a career.
              </div>
              <br></br>
              <div className="about-me">
                Today, as a full-time front-end developer with a specialization
                in Android development, I have extensive experience working with
                various frameworks such as Angular and React, as well as
                essential libraries like Redux and Axios. I'm also proficient in
                web development and have a broad range of skills that extend
                beyond just mobile development.
              </div>
            </div>
            <img
              className="dev-photo"
              src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.15752-9/333323418_723707869240371_5378287988469331409_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGrM4zpMLREqY896Xtj6MpRLXtxpL02TN4te3GkvTZM3gON2VL-JRaM5v2mi-XE271YU9KbdnLyOfpLBoGp0yeR&_nc_ohc=PUJuQHbaFOwAX_Cnym2&_nc_ht=scontent.fmnl17-1.fna&oh=03_AdRlFwXdnKxOuvN8R7SgSsklSoTn6V97sydfn4KTtdvVAw&oe=642BA1B0"
              alt="Dev's Profile Picture"
            />
          </div>
          <div className="label">&lt;/about-me&gt;</div>
        </div>
      </div>
    </div>
  );
};

export default About;
