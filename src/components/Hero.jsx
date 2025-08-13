// src/components/Hero.jsx
import React from 'react';
import {
  Container,
  Title,
  Text,
  Paper,
  SimpleGrid,
  Group,
  Stack,
  Box,
  List,
  ThemeIcon,
  Flex
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

const Hero = () => {
  const stats = [
    { label: 'Clients', value: '150+' },
    { label: 'Projects', value: '300+' },
    { label: 'Hours Of Support', value: '24/7' },
    { label: 'Hard Workers', value: '50+' },
  ];

  return (
    <Box
      id="home"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        paddingTop: '140px',
        paddingBottom: '80px',
        color: 'white',
      }}
    >
      <Container size="xl">
        <Stack gap="xl">
          <Stack align="center" gap="md">
            <Title 
              order={1} 
              size="3rem" 
              ta="center"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700 
              }}
            >
              Paramount Global Trading
            </Title>
            <Text 
              size="xl" 
              ta="center" 
              opacity={0.9}
              maw={600}
              mx="auto"
            >
              Dynamic and versatile company specializing in providing a wide range of products and services
            </Text>
          </Stack>

          <Paper 
            p="xl" 
            radius="lg" 
            style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <Text size="lg" ta="center">
              PGT focuses on providing trading solutions for various industries such as oil and gas, 
              manufacturing, construction, occupational health and safety, uniforms and workwear.
            </Text>
          </Paper>

          <SimpleGrid 
            cols={{ base: 1, md: 2 }} 
            spacing="xl"
          >
            <Paper 
              p="xl" 
              radius="lg" 
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <Title order={3} mb="md">Vision & Mission</Title>
              <List
                spacing="sm"
                icon={
                  <ThemeIcon color="yellow" size={20} radius="xl">
                    <IconCheck size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>Creating a better tomorrow through innovation and excellence</List.Item>
                <List.Item>Empowering our customers to achieve their goals with integrity, dedication, and personalized solutions</List.Item>
              </List>
            </Paper>

            <Paper 
              p="xl" 
              radius="lg" 
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              <Title order={3} mb="md">Our Vision</Title>
              <Text>
                Our vision as a supplier to become a leading provider of high-quality products and services 
                that meet the unique needs of each industry we serve.
              </Text>
            </Paper>
          </SimpleGrid>

          <Box>
            <Title order={3} ta="center" mb="xl">What we have achieved so far</Title>
            <SimpleGrid 
              cols={{ base: 2, sm: 4 }} 
              spacing="lg"
            >
              {stats.map((stat, index) => (
                <Paper 
                  key={index}
                  p="xl" 
                  radius="lg" 
                  ta="center"
                  style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <Text size="sm" mb="xs" opacity={0.8}>{stat.label}</Text>
                  <Text 
                    size="2rem" 
                    fw={700} 
                    c="yellow"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
                  >
                    {stat.value}
                  </Text>
                </Paper>
              ))}
            </SimpleGrid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
