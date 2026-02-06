import React from "react";
import aboutImg from "../assets/img/Abdalsalam-removebg-preview.png";
import "./About.css";
import TrackVisibility from "react-on-screen";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-wrapper">
        <div className="about-container">

          {/* LEFT — IMAGE */}
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "about-image animate__animated animate__zoomIn"
                    : "about-image"
                }
              >
                <img src={aboutImg} alt="Abdalsalam Abakar" />
              </div>
            )}
          </TrackVisibility>

          {/* RIGHT — TEXT */}
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "about-text animate__animated animate__fadeInRight"
                    : "about-text"
                }
              >
                <span className="about-badge animate-item">About Me</span>

                <h2 className="about-title animate-item">
                  Passionate <span>Full-Stack Developer</span>
                </h2>

                <p className="animate-item">
                  I’m Abdalsalam Abakar, a full-stack developer passionate about
                  building modern, scalable, and user-focused web applications.
                  I enjoy turning ideas into clean, efficient, and reliable
                  digital solutions.
                </p>

                <p className="animate-item">
                  I work with JavaScript, React, Node.js, and databases, focusing
                  on maintainable code, smooth user experiences, and continuous
                  learning to keep up with modern web technologies.
                </p>

                <div className="about-stats">
                  <div className="stat animate-item">
                    <h3>1+</h3>
                    <span>Years Learning</span>
                  </div>
                  <div className="stat animate-item">
                    <h3>10+</h3>
                    <span>Projects</span>
                  </div>
                  <div className="stat animate-item">
                    <h3>100%</h3>
                    <span>Commitment</span>
                  </div>
                </div>
              </div>
            )}
          </TrackVisibility>

        </div>
      </div>
    </section>
  );
};

export default About;
