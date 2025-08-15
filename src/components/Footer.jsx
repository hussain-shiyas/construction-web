// src/components/Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-section bg-dark text-light py-5">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-title">Paramount Global Trading</h5>
            <p className="footer-text">
              Creating a better tomorrow through innovation and excellence. 
              Empowering our customers to achieve their goals with integrity, 
              dedication, and personalized solutions.
            </p>
          </Col>
          
          <Col lg={4} md={6} className="mb-4">
            <h5 className="footer-title">Our Services</h5>
            <ul className="footer-links">
              <li>Oil & Gas Industry</li>
              <li>Manufacturing Industry</li>
              <li>Construction Industry</li>
              <li>Occupational Health & Safety</li>
              <li>Uniforms & Workwear</li>
              <li>Network Product Solutions</li>
            </ul>
          </Col>
          
          <Col lg={4} md={12} className="mb-4">
            <h5 className="footer-title">Contact Information</h5>
            <div className="footer-contact">
              <p className="mb-2">Office No.41, 2nd Floor, Port Gate Building</p>
              <p className="mb-2">Dammaam 32221, Saudi Arabia</p>
              <p className="mb-2">Phone: +966 53 335 0205</p>
              <p className="mb-0">Email: info@pmgtgroup.com</p>
            </div>
          </Col>
        </Row>
        
        <hr className="footer-divider" />
        
        <Row>
          <Col lg={12} className="text-center">
            <p className="copyright mb-0">
              © 2024 Paramount Global Trading. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
