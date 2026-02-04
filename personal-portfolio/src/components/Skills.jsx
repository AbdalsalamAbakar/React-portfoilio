import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const technicalSkills = [
    { name: "HTML", icon: meter1 },
    { name: "CSS", icon: meter2 },
    { name: "Tailwind CSS", icon: meter1 },
    { name: "JavaScript", icon: meter3 },
    { name: "React", icon: meter1 },
    { name: "Node.js", icon: meter1 },
    { name: "Express.js", icon: meter1 },
    { name: "MongoDB", icon: meter1 },
  ];

  const softSkills = [
    { name: "Teamwork", icon: meter2 },
    { name: "Communication", icon: meter3 },
    { name: "Problem Solving", icon: meter1 },
    { name: "Git & GitHub", icon: meter2 },
    { name: "Figma", icon: meter3 },
    { name: "VS Code", icon: meter1 },
    { name: "AI For Every Employee", icon: meter2 },
  ];

  const skillCardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: "10px",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const iconCircleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)", // subtle soft blue gradient
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    marginBottom: "10px",
    border: "2px solid #b2ebf2", // light border for contrast
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  return (
    <section className="skill py-5 position-relative" id="skills">
      <div className="container">
        {/* TECHNICAL SKILLS */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="skill-bx wow zoomIn text-center">
              <h2 className="mb-3">Technical Skills</h2>
              <p className="mb-4">
                I’m a full-stack developer skilled in React, Node.js, and modern web
                technologies. I build clean, efficient, and user-friendly applications
                that solve real-world problems.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2500}
                keyBoardControl={true}
                showDots={true}
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
              >
                {technicalSkills.map((skill, idx) => (
                  <div key={idx} style={skillCardStyle} className="skill-card">
                    <div style={iconCircleStyle} className="skill-icon">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <h5 className="mt-2">{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>

        {/* SOFT SKILLS & OTHER TOOLS */}
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn text-center">
              <h2 className="mb-3">Soft Skills & Other Tools</h2>
              <p className="mb-4">
                Besides technical skills, I excel in teamwork, communication, and
                problem-solving. I also use tools to streamline development and
                collaboration.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
                {softSkills.map((skill, idx) => (
                  <div key={idx} style={skillCardStyle} className="skill-card">
                    <div
                      style={{
                        ...iconCircleStyle,
                        width: "90px",
                        height: "90px",
                        background: "linear-gradient(135deg, #fce4ec, #f8bbd0)", // soft pink gradient for soft skills
                        border: "2px solid #f8bbd0",
                      }}
                      className="skill-icon"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        style={{ width: "45px", height: "45px" }}
                      />
                    </div>
                    <h6 className="mt-1" style={{ fontSize: "0.9rem" }}>
                      {skill.name}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <img
        className="position-absolute top-0 start-0 opacity-25"
        style={{ zIndex: -1, maxWidth: "200px" }}
        src={colorSharp}
        alt="Background"
      />

      {/* HOVER EFFECTS */}
      <style>{`
        .skill-card:hover .skill-icon {
          transform: scale(1.1);
          box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }

        @media (max-width: 768px) {
          .skill-card h5, .skill-card h6 {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
