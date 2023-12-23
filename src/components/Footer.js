// Footer.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <Container className="pt-3">
        <Row>
          <Col lg={4} md={6} sm={12}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +123456789</p>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <h5>Follow Us</h5>
            <p className=" link-primary">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="me-2 link-primary"
                />
                Facebook
              </a>
            </p>
            <p className="link-info">
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className="link-info me-2" />
                Twitter
              </a>
            </p>
            <p className="link-danger">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="link-danger me-2"
                />
                Instagram
              </a>
            </p>
          </Col>
          <Col lg={4} md={12} sm={12}>
            <h5>Newsletter</h5>
            <p>Subscribe to our newsletter for updates</p>
            {/* Add your newsletter form or any other content here */}
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-secondary">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
