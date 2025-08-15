// src/components/Gallery.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = [
    'All',
    'Oil & Gas Industry',
    'Manufacturing Industry', 
    'Construction Industry',
    'Occupational Health & Safety',
    'Uniforms & Workwear',
    'Network Product Solutions'
  ];

  const galleryItems = [
    { id: 1, category: 'Oil & Gas Industry', title: 'Oil & Gas Equipment', image: '/api/placeholder/300/200' },
    { id: 2, category: 'Manufacturing Industry', title: 'Manufacturing Tools', image: '/api/placeholder/300/200' },
    { id: 3, category: 'Construction Industry', title: 'Construction Materials', image: '/api/placeholder/300/200' },
    { id: 4, category: 'Occupational Health & Safety', title: 'Safety Equipment', image: '/api/placeholder/300/200' },
    { id: 5, category: 'Uniforms & Workwear', title: 'Professional Workwear', image: '/api/placeholder/300/200' },
    { id: 6, category: 'Network Product Solutions', title: 'Network Infrastructure', image: '/api/placeholder/300/200' },
    { id: 7, category: 'Oil & Gas Industry', title: 'Pipeline Equipment', image: '/api/placeholder/300/200' },
    { id: 8, category: 'Manufacturing Industry', title: 'Industrial Machinery', image: '/api/placeholder/300/200' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="gallery-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={12} className="text-center">
            <h2 className="section-title">Gallery</h2>
            <p className="section-subtitle">
              Explore our work across different industries
            </p>
          </Col>
        </Row>
        
        <Row className="mb-4">
          <Col lg={12}>
            <div className="gallery-filters text-center">
              {filters.map((filter, index) => (
                <Button
                  key={index}
                  variant={activeFilter === filter ? "primary" : "outline-primary"}
                  size="sm"
                  className="me-2 mb-2 filter-btn"
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </Col>
        </Row>
        
        <Row>
          {filteredItems.map((item) => (
            <Col lg={3} md={6} className="mb-4" key={item.id}>
              <Card className="gallery-item">
                <div className="gallery-image-placeholder">
                  <span>{item.title}</span>
                </div>
                <Card.Body>
                  <Card.Text className="gallery-category">
                    {item.category}
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

export default Gallery;
