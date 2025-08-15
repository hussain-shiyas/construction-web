// src/components/About.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  const stats = [
    { number: '150+', label: 'Clients' },
    { number: '300+', label: 'Projects' },
    { number: '24/7', label: 'Hours Of Support' },
    { number: '50+', label: 'Hard Workers' },
  ];

  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={6} className="mb-4">
            <Card className="h-100 vision-card">
              <Card.Body>
                <Card.Title className="section-title">Vision & Mission</Card.Title>
                <ul className="vision-list">
                  <li>Creating a better tomorrow through innovation and excellence</li>
                  <li>Empowering our customers to achieve their goals with integrity, dedication, and personalized solutions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-4">
            <Card className="h-100 vision-card">
              <Card.Body>
                <Card.Title className="section-title">Our Vision</Card.Title>
                <Card.Text>
                  Our vision as a supplier to become a leading provider of high-quality products and services 
                  that meet the unique needs of each industry we serve.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="achievements-section">
          <h2 className="text-center mb-4 section-title">What we have achieved so far</h2>
          <Row>
            {stats.map((stat, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <div className="stat-card text-center">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
