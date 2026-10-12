
import { useState } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // EmailJS configuration
  const SERVICE_ID = "service_xxd2ddf";
  const TEMPLATE_ID = "template_kbhdcvf";
  const PUBLIC_KEY = "VBtNJ04NuLR9pza9a";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formDetails.firstName ||
      !formDetails.lastName ||
      !formDetails.email.includes("@") ||
      !formDetails.message
    ) {
      setStatus({
        success: false,
        message: "Please fill in all required fields.",
      });
      return;
    }

    setButtonText("Sending...");
    setStatus({});

    const templateParams = {
      firstName: formDetails.firstName,
      lastName: formDetails.lastName,
      email: formDetails.email,
      phone: formDetails.phone || "N/A",
      message: formDetails.message,
    };

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      setStatus({
        success: true,
        message: "Message sent successfully!",
      });

      setFormDetails(formInitialDetails);
      setButtonText("Send");

      setTimeout(() => {
        setStatus({});
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus({
        success: false,
        message:
          error.text ||
          error.message ||
          "Oops! Something went wrong. Please try again.",
      });

      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* Contact Methods Section */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn"
                      : ""
                  }
                >
                  <h2>Contact Me Directly</h2>

                  <p>
                    Connect with me through GitHub, LinkedIn, email, phone,
                    or even WhatsApp. I’d love to hear from you!
                  </p>

                  <div
                    className="contact-icons"
                    style={{
                      display: "flex",
                      gap: "20px",
                      flexWrap: "wrap",
                      fontSize: "1.8rem",
                    }}
                  >
                    <a
                      href="https://github.com/AbdalsalamAbakar"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/abdalsalam-abakar-907356370/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      href="mailto:abakarabdalsalam@gmail.com"
                      title="Email"
                    >
                      <FaEnvelope />
                    </a>

                    <a
                      href="tel:+250732520169"
                      title="Phone"
                    >
                      <FaPhone />
                    </a>

                    <a
                      href="https://wa.me/+250732520169"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Contact Form Section */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn"
                      : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form onSubmit={handleSubmit}>
                    <Row>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate(
                              "firstName",
                              e.target.value
                            )
                          }
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate(
                              "lastName",
                              e.target.value
                            )
                          }
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate(
                              "email",
                              e.target.value
                            )
                          }
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate(
                              "phone",
                              e.target.value
                            )
                          }
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate(
                              "message",
                              e.target.value
                            )
                          }
                          required
                        />

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false
                                ? "danger"
                                : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}

                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Contact;
