// src/components/Footer.jsx
import React from 'react';
import {
  Container,
  Group,
  Text,
  Stack,
  SimpleGrid,
  Box,
  Anchor,
  Divider
} from '@mantine/core';

const Footer = () => {
  const services = [
    'Oil & Gas Industry',
    'Manufacturing Industry',
    'Construction Industry',
    'Health & Safety',
    'Uniforms & Workwear',
    'Network Solutions'
  ];

  return (
    <Box style={{ background: '#1a1b1e', color: 'white' }} py={60}>
      <Container size="xl">
        <Stack gap="xl">
          <SimpleGrid 
            cols={{ base: 1, sm: 2, md: 3 }} 
            spacing="xl"
          >
            <Stack gap="md">
              <Text size="xl" fw={700} c="brand.4">
                Paramount Global Trading
              </Text>
              <Text c="dimmed" size="sm">
                Creating a better tomorrow through innovation and excellence. 
                Empowering our customers to achieve their goals with integrity, 
                dedication, and personalized solutions.
              </Text>
            </Stack>
            
            <Stack gap="md">
              <Text fw={600} c="brand.4">
                Our Services
              </Text>
              <Stack gap="xs">
                {services.map((service, index) => (
                  <Text key={index} size="sm" c="dimmed">
                    {service}
                  </Text>
                ))}
              </Stack>
            </Stack>
            
            <Stack gap="md">
              <Text fw={600} c="brand.4">
                Contact Information
              </Text>
              <Stack gap="xs">
                <Text size="sm" c="dimmed">
                  Office No.41, 2nd Floor, Port Gate Building
                </Text>
                <Text size="sm" c="dimmed">
                  Dammaam 32221, Saudi Arabia
                </Text>
                <Text size="sm" c="dimmed">
                  +966 53 335 0205
                </Text>
                <Anchor href="mailto:info@pmgtgroup.com" size="sm" c="brand.4">
                  info@pmgtgroup.com
                </Anchor>
              </Stack>
            </Stack>
          </SimpleGrid>
          
          <Divider color="dark.4" />
          
          <Group justify="center">
            <Text size="sm" c="dimmed" ta="center">
              © 2024 Paramount Global Trading. All rights reserved.
            </Text>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
