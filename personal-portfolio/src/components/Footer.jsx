import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark  text-light pt-5">
      <Container cl>
        {/* Use Row gap to ensure equal spacing */}
        <Row className="mb-4 gx-4 gy-4"> 
          {/* About */}
          <Col xs={12} md={4}>
            <h5 className="text-white mb-3">Abdalsalam Abakar</h5>
            <p className="text-secondary">
              Full-Stack Developer passionate about building modern and responsive web applications. Explore my work and connect with me!
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={12} md={2}>
            <h6 className="text-white mb-3">Quick Links</h6>
            <ul className="list-unstyled text-secondary">
              <li className="mb-2"><a href="#about" className="footer-link">About</a></li>
              <li className="mb-2"><a href="#skills" className="footer-link">Skills</a></li>
              <li className="mb-2"><a href="#projects" className="footer-link">Projects</a></li>
              <li className="mb-2"><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>

          {/* Social Icons */}
          <Col xs={12} md={3}>
            <h6 className="text-white mb-3">Follow Me</h6>
            <div className="d-flex gap-3">
              <a href="https://github.com/AbdalsalamAbakar" target="_blank" rel="noreferrer" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/abdalsalam-abakar-907356370/" target="_blank" rel="noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </a>
            </div>
          </Col>

          {/* Contact */}
          <Col xs={12} md={3}>
            <h6 className="text-white mb-3">Contact</h6>
            <p className="text-secondary mb-1">Email: <a href="mailto:abakarabdalsalam@gmail.com" className="footer-link">abakarabdalsalam@gmail.com</a></p>
            <p className="text-secondary mb-0">Phone: +250796562890</p>
          </Col>
        </Row>

        {/* Bottom copyright */}
        <Row className="pt-3 border-top border-secondary ">
          <Col className="text-center text-secondary">
            &copy; {new Date().getFullYear()} Abdalsalam Abakar. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
