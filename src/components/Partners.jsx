// src/components/Partners.jsx
import React from 'react';
import {
  Container,
  Title,
  Paper,
  Text,
  SimpleGrid,
  Box,
  Stack
} from '@mantine/core';

const Partners = () => {
  const exclusivePartners = [
    'Partner Company 1',
    'Partner Company 2',
    'Partner Company 3',
  ];

  const dealers = [
    'Dealer Company 1',
    'Dealer Company 2', 
    'Dealer Company 3',
    'Dealer Company 4',
  ];

  return (
    <Box py={80} bg="gray.0">
      <Container size="xl">
        <Stack gap="xl">
          <Title 
            order={2} 
            ta="center" 
            size="2.5rem"
            c="brand.6"
            mb="xl"
          >
            Exclusive Dealer
          </Title>
          
          <SimpleGrid 
            cols={{ base: 1, sm: 2, md: 3 }} 
            spacing="lg"
            mb="xl"
          >
            {exclusivePartners.map((partner, index) => (
              <Paper 
                key={index}
                shadow="sm" 
                p="xl" 
                radius="lg"
                ta="center"
                style={{
                  height: 120,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                }}
              >
                <Text fw={500} c="dimmed">
                  {partner}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>

          <Title 
            order={2} 
            ta="center" 
            size="2rem"
            c="brand.6"
            mt="xl"
            mb="xl"
          >
            We also deal with
          </Title>
          
          <SimpleGrid 
            cols={{ base: 2, sm: 3, md: 4 }} 
            spacing="lg"
          >
            {dealers.map((dealer, index) => (
              <Paper 
                key={index}
                shadow="sm" 
                p="lg" 
                radius="md"
                ta="center"
                style={{
                  height: 100,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                }}
              >
                <Text size="sm" fw={500} c="dimmed">
                  {dealer}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Partners;
