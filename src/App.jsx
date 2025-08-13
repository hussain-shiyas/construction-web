// src/App.jsx
import React from 'react';
import { MantineProvider, createTheme, AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

const theme = createTheme({
  colors: {
    brand: [
      '#e3f2fd',
      '#bbdefb',
      '#90caf9',
      '#64b5f6',
      '#42a5f5',
      '#2196f3',
      '#2c5aa0',
      '#1976d2',
      '#1565c0',
      '#0d47a1'
    ],
  },
  primaryColor: 'brand',
  fontFamily: 'Inter, system-ui, sans-serif',
});

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <Notifications />
      <AppShell
        header={{ height: 70 }}
        navbar={{
          width: 300,
          breakpoint: 'md',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <Header opened={opened} toggle={toggle} />
        <AppShell>
          <Hero />
          <Services />
          <Gallery />
          <Partners />
          <Contact />
          <Footer />
        </AppShell>
      </AppShell>
    </MantineProvider>
  );
}

export default App;
