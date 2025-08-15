// src/components/Contact.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle">
              Get in touch with us for any inquiries
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col lg={6} className="mb-4">
            <div className="contact-info">
              <Card className="contact-info-card mb-4">
                <Card.Body>
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon text-primary me-3" />
                    <div>
                      <h5>Location:</h5>
                      <p className="mb-1">CR. 2051238344</p>
                      <p className="mb-1">Office No.41, 2nd Floor, Port Gate Building</p>
                      <p className="mb-1">A Khalidiyah Al Janubiyah, Dammaam 32221,</p>
                      <p className="mb-0">Saudi Arabia</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              <Card className="contact-info-card mb-4">
                <Card.Body>
                  <div className="contact-item">
                    <FaEnvelope className="contact-icon text-primary me-3" />
                    <div>
                      <h5>Email:</h5>
                      <p className="mb-1">info@pmgtgroup.com</p>
                      <p className="mb-0">sales@pmgtgroup.com</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
              
              <Card className="contact-info-card">
                <Card.Body>
                  <div className="contact-item">
                    <FaPhone className="contact-icon text-primary me-3" />
                    <div>
                      <h5>Call:</h5>
                      <p className="mb-0">+966 53 335 0205</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
          
          <Col lg={6}>
            <Card className="contact-form-card">
              <Card.Body>
                <h4 className="mb-4">Send Message</h4>
                
                {showAlert && (
                  <Alert variant="success">
                    Message sent successfully! We'll get back to you soon.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Button type="submit" variant="primary" size="lg" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
