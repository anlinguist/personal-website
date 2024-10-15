import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from '@mantine/form';
import { Button, TextInput, Textarea } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Contact() {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      description: '',
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'Name must have at least 2 characters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleSubmit = async (values: any) => {
    setLoading(true);
    try {
      console.log("submitting values", values);
      // Submit to Web3Forms API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "916d79cd-b293-41d0-a1dd-8d48b00e1352",
          ...values
        })
      });

      if (response.ok) {
        notifications.show({
          position: 'bottom-right',
          title: 'Message sent!',
          message: 'Your message has been successfully sent. We will get back to you soon!',
        });

        // Reset the form
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Something went wrong, please try again.',
        color: 'red',
      });
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div id="contact">
      <Helmet>
        <title>Contact Andrew</title>
      </Helmet>
      <h2 className="section-titles">Contact</h2>
      <p>Feel free to reach out anytime, I love taking on new side projects! Check out <a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.github.com/anlinguist">my personal Github</a> or <a rel="noreferrer" className="linkonpage" target="_blank" href="https://www.linkedin.com/in/andrewnelson23">my LinkedIn profile</a> or just fill out this form:</p>
      <form id="contactform" onSubmit={form.onSubmit(handleSubmit)}>


        <TextInput
          placeholder="Your name"
          name="name"
          variant="filled"
          mb={'sm'}
          {...form.getInputProps('name')}
        />
        <TextInput
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />

        <Textarea
          mt="md"
          placeholder="Message"
          maxRows={10}
          minRows={5}
          autosize
          name="description"
          variant="filled"
          mb={'sm'}
          {...form.getInputProps('description')}
        />
        <div id="submitdiv">
          <Button variant='filled' type="submit" size="md" color='#27462C' loading={loading}>
            Send message
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;