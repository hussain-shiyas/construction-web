// src/components/Services.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  FaOilCan, 
  FaIndustry, 
  FaHardHat, 
  FaShieldAlt, 
  FaTshirt, 
  FaNetworkWired 
} from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Oil & Gas Industry",
      description: "We understand the challenges of this industry and are committed to delivering exceptional service to our clients.",
      icon: <FaOilCan />,
      color: "primary"
    },
    {
      title: "Manufacturing Industry", 
      description: "Our team of experts has extensive experience in the manufacturing industry, and we collaborate closely with our clients to comprehend their unique requirements.",
      icon: <FaIndustry />,
      color: "success"
    },
    {
      title: "Construction Industry",
      description: "PGT provides essential materials and equipment to construction companies to ensure successful project completion.",
      icon: <FaHardHat />,
      color: "warning"
    },
    {
      title: "Occupational Health & Safety",
      description: "We understand the importance of safety in the workplace and are committed to providing exceptional services to our clients.",
      icon: <FaShieldAlt />,
      color: "danger"
    },
    {
      title: "Uniforms & Workwear",
      description: "As a uniform and workwear supplier, we provide high-quality apparel that is designed to meet the unique needs and demands of various industries.",
      icon: <FaTshirt />,
      color: "info"
    },
    {
      title: "Network Product Solutions",
      description: "At PGT, we are dedicated to providing top-notch Network Product Solutions tailored to meet your connectivity needs.",
      icon: <FaNetworkWired />,
      color: "secondary"
    }
  ];

  return (
    <section id="services" className="services-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">Dedicated to Serving</h2>
            <p className="section-subtitle">
              We provide comprehensive solutions across multiple industries
            </p>
          </Col>
        </Row>
        <Row>
          {services.map((service, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <Card className="service-card h-100">
                <Card.Body className="text-center">
                  <div className={`service-icon text-${service.color}`}>
                    {service.icon}
                  </div>
                  <Card.Title className="service-title">{service.title}</Card.Title>
                  <Card.Text className="service-description">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
