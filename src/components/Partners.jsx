// src/components/Partners.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Partners = () => {
  return (
    <section className="partners-section py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">Exclusive Dealer</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          {[1, 2, 3].map((partner, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="partner-card text-center">
                <Card.Body>
                  <div className="partner-logo-placeholder">
                    Partner Logo {partner}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col lg={12} className="text-center mb-4">
            <h2 className="section-title">We also deal with</h2>
          </Col>
        </Row>
        
        <Row>
          {[1, 2, 3, 4, 5, 6].map((dealer, index) => (
            <Col lg={2} md={4} sm={6} className="mb-3" key={index}>
              <Card className="dealer-card text-center">
                <Card.Body className="py-3">
                  <small>Dealer {dealer}</small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
