// src/components/Gallery.jsx
import React, { useState } from 'react';
import {
  Container,
  Title,
  Group,
  Button,
  SimpleGrid,
  Card,
  Box,
  Text,
  Stack
} from '@mantine/core';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = [
    'All',
    'Oil & Gas',
    'Manufacturing', 
    'Construction',
    'Health & Safety',
    'Uniforms',
    'Network Solutions'
  ];

  const galleryItems = [
    { id: 1, category: 'Oil & Gas', title: 'Oil & Gas Equipment' },
    { id: 2, category: 'Manufacturing', title: 'Manufacturing Tools' },
    { id: 3, category: 'Construction', title: 'Construction Materials' },
    { id: 4, category: 'Health & Safety', title: 'Safety Equipment' },
    { id: 5, category: 'Uniforms', title: 'Professional Workwear' },
    { id: 6, category: 'Network Solutions', title: 'Network Infrastructure' },
    { id: 7, category: 'Oil & Gas', title: 'Pipeline Equipment' },
    { id: 8, category: 'Manufacturing', title: 'Industrial Machinery' },
  ];

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <Box id="gallery" py={80}>
      <Container size="xl">
        <Stack gap="xl">
          <Title 
            order={2} 
            ta="center" 
            size="2.5rem"
            c="brand.6"
            mb="xl"
          >
            Gallery
          </Title>
          
          <Group justify="center" gap="sm">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "filled" : "outline"}
                color="brand"
                size="sm"
                radius="xl"
                onClick={() => setActiveFilter(filter)}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: activeFilter === filter ? 600 : 500,
                }}
              >
                {filter}
              </Button>
            ))}
          </Group>
          
          <SimpleGrid 
            cols={{ base: 1, sm: 2, md: 3, lg: 4 }} 
            spacing="lg"
          >
            {filteredItems.map((item) => (
              <Card 
                key={item.id}
                shadow="sm" 
                padding="lg" 
                radius="md"
                style={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                }}
              >
                <Box
                  style={{
                    height: 200,
                    background: 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <Text c="dimmed" ta="center" fw={500}>
                    {item.title}
                  </Text>
                </Box>
                <Text size="sm" c="brand.6" fw={500}>
                  {item.category}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Gallery;
