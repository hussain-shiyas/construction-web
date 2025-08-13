// src/components/Services.jsx
import React from 'react';
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  Text,
  Box,
  Stack
} from '@mantine/core';
import {
  IconDroplet,
  IconBuilding,
  IconTool,
  IconShield,
  IconShirt,
  IconNetwork
} from '@tabler/icons-react';

const Services = () => {
  const services = [
    {
      title: "Oil & Gas Industry",
      description: "We understand the challenges of this industry and are committed to delivering exceptional service to our clients.",
      icon: IconDroplet,
      color: "blue"
    },
    {
      title: "Manufacturing Industry", 
      description: "Our team of experts has extensive experience in the manufacturing industry, and we collaborate closely with our clients to comprehend their unique requirements.",
      icon: IconBuilding,
      color: "teal"
    },
    {
      title: "Construction Industry",
      description: "PGT provides essential materials and equipment to construction companies to ensure successful project completion.",
      icon: IconTool,
      color: "orange"
    },
    {
      title: "Occupational Health & Safety",
      description: "We understand the importance of safety in the workplace and are committed to providing exceptional services to our clients.",
      icon: IconShield,
      color: "red"
    },
    {
      title: "Uniforms & Workwear",
      description: "As a uniform and workwear supplier, we provide high-quality apparel that is designed to meet the unique needs and demands of various industries.",
      icon: IconShirt,
      color: "violet"
    },
    {
      title: "Network Product Solutions",
      description: "At PGT, we are dedicated to providing top-notch Network Product Solutions tailored to meet your connectivity needs.",
      icon: IconNetwork,
      color: "green"
    }
  ];

  return (
    <Box id="services" py={80} bg="gray.0">
      <Container size="xl">
        <Stack gap="xl">
          <Title 
            order={2} 
            ta="center" 
            size="2.5rem"
            c="brand.6"
            mb="xl"
          >
            Dedicated to Serving
          </Title>
          
          <SimpleGrid 
            cols={{ base: 1, sm: 2, lg: 3 }} 
            spacing="xl"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index}
                  shadow="md" 
                  padding="xl" 
                  radius="lg"
                  style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 'var(--mantine-shadow-lg)',
                    },
                  }}
                >
                  <Stack align="center" gap="md">
                    <Box
                      style={{
                        background: `var(--mantine-color-${service.color}-1)`,
                        borderRadius: '50%',
                        padding: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconComponent 
                        size={48} 
                        color={`var(--mantine-color-${service.color}-6)`}
                      />
                    </Box>
                    
                    <Title order={3} ta="center" c="brand.6" size="lg">
                      {service.title}
                    </Title>
                    
                    <Text ta="center" c="dimmed">
                      {service.description}
                    </Text>
                  </Stack>
                </Card>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Services;
