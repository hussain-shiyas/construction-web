// src/components/Hero.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <div className="hero-content">
              <h1 className="hero-title">
                Welcome to <span className="brand-text">Paramount Global Trading</span>
              </h1>
              <p className="hero-subtitle">
                Dynamic and versatile company specializing in providing a wide range of products and services
              </p>
              <div className="hero-description">
                <p>
                  PGT focuses on providing trading solutions for various industries such as oil and gas, 
                  manufacturing, construction, occupational health and safety, uniforms and workwear.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
