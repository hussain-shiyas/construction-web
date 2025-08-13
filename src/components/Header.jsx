// src/components/Header.jsx (AppShell Version)
import React from 'react';
import {
  AppShell,
  Burger,
  Group,
  Text,
  Container,
  Anchor,
  NavLink
} from '@mantine/core';

const Header = ({ opened, toggle }) => {
  const navigation = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <AppShell.Header>
        <Container size="xl" h="100%">
          <Group h="100%" justify="space-between">
            <Text 
              size="xl" 
              fw={700} 
              c="brand.6"
              style={{ fontSize: '1.5rem' }}
            >
              Paramount Global Trading
            </Text>

            <Group gap="lg" visibleFrom="md">
              {navigation.map((item) => (
                <Anchor
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  fw={500}
                  c="dark.7"
                  td="none"
                  style={{ cursor: 'pointer' }}
                >
                  {item.label}
                </Anchor>
              ))}
            </Group>

            <Burger 
              opened={opened} 
              onClick={toggle} 
              hiddenFrom="md" 
              size="sm" 
            />
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar p="md" hiddenFrom="md">
        {navigation.map((item) => (
          <NavLink
            key={item.label}
            label={item.label}
            onClick={() => handleNavClick(item.href)}
          />
        ))}
      </AppShell.Navbar>
    </>
  );
};

export default Header;
