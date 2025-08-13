// src/components/Contact.jsx
import React from 'react';
import {
  Container,
  Title,
  SimpleGrid,
  Card,
  TextInput,
  Textarea,
  Button,
  Text,
  Stack,
  Group,
  Box,
  ThemeIcon
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconMapPin, IconMail, IconPhone, IconCheck } from '@tabler/icons-react';

const Contact = () => {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.length < 2 ? 'Name must have at least 2 letters' : null,
      email: (value) => /^\S+@\S+$/.test(value) ? null : 'Invalid email',
      subject: (value) => value.length < 3 ? 'Subject must have at least 3 letters' : null,
      message: (value) => value.length < 10 ? 'Message must have at least 10 characters' : null,
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    notifications.show({
      title: 'Message Sent!',
      message: 'Thank you for your message. We will get back to you soon.',
      color: 'green',
      icon: <IconCheck size={16} />,
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: IconMapPin,
      title: 'Location',
      details: [
        'CR. 2051238344',
        'Office No.41, 2nd Floor, Port Gate Building',
        'A Khalidiyah Al Janubiyah, Dammaam 32221,',
        'Saudi Arabia'
      ]
    },
    {
      icon: IconMail,
      title: 'Email',
      details: [
        'info@pmgtgroup.com',
        'sales@pmgtgroup.com'
      ]
    },
    {
      icon: IconPhone,
      title: 'Phone',
      details: ['+966 53 335 0205']
    }
  ];

  return (
    <Box id="contact" py={80} bg="gray.0">
      <Container size="xl">
        <Title 
          order={2} 
          ta="center" 
          size="2.5rem"
          c="brand.6"
          mb="xl"
        >
          Contact Us
        </Title>
        
        <SimpleGrid 
          cols={{ base: 1, md: 2 }} 
          spacing="xl"
        >
          <Stack gap="lg">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} shadow="sm" p="xl" radius="lg">
                  <Group mb="md">
                    <ThemeIcon size="lg" color="brand" variant="light">
                      <IconComponent size={24} />
                    </ThemeIcon>
                    <Title order={3} c="brand.6">
                      {info.title}
                    </Title>
                  </Group>
                  <Stack gap="xs">
                    {info.details.map((detail, idx) => (
                      <Text key={idx} size="sm" c="dimmed">
                        {detail}
                      </Text>
                    ))}
                  </Stack>
                </Card>
              );
            })}
          </Stack>
          
          <Card shadow="md" p="xl" radius="lg">
            <Title order={3} mb="lg" c="brand.6">
              Send us a Message
            </Title>
            
            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack gap="md">
                <TextInput
                  label="Your Name"
                  placeholder="Enter your name"
                  required
                  {...form.getInputProps('name')}
                />
                
                <TextInput
                  label="Email Address"
                  placeholder="Enter your email"
                  required
                  {...form.getInputProps('email')}
                />
                
                <TextInput
                  label="Subject"
                  placeholder="Message subject"
                  required
                  {...form.getInputProps('subject')}
                />
                
                <Textarea
                  label="Message"
                  placeholder="Your message"
                  minRows={4}
                  required
                  {...form.getInputProps('message')}
                />
                
                <Button 
                  type="submit" 
                  color="brand" 
                  size="md"
                  style={{ marginTop: '1rem' }}
                >
                  Send Message
                </Button>
              </Stack>
            </form>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Contact;
