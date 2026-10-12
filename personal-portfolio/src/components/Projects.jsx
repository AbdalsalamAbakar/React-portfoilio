import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard"; // default import
import projImg1 from "../assets/img/authentication.png";
import projImg2 from "../assets/img/weather-forcast.png";
import projImg3 from "../assets/img/daily-puls.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

const projects = [
  {
    title: "Authentication System",
    description: "React & Node.js",
    imgUrl: projImg1
  },
  {
    title: "Weather App",
    description: "React & Weather API",
    imgUrl: projImg2
  },
  {
    title: "Daily News Web",
    description: "React & JavaScript",
    imgUrl: projImg3
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Explore my projects and see my work in action.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item><Nav.Link eventKey="first">Tab 1</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="second">Tab 2</Nav.Link></Nav.Item>
                      <Nav.Item><Nav.Link eventKey="third">Tab 3</Nav.Link></Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>More exciting projects are currently in development. Stay tuned for new ideas, practical solutions, and innovative work coming soon.
</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>New projects are currently in development. Check back soon to explore more of my work.
</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  )
}

export default Projects;