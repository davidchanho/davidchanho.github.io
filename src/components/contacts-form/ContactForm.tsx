import Section from 'components/section/Section';
import emailjs from 'emailjs-com';
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { ChangeEvent, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { serviceId, templateId, userId } from '../../config.json';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const initialForm: ContactFormProps = { name: '', email: '', message: '' }

function ContactForm() {
  const [stored, setStored] = useLocalStorage('form', `${initialForm}`);

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, '#contactForm', userId)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setStored(initialForm);
      }, function (error) {
        console.log('Error');
      });

    setStored(initialForm)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setStored({
      ...stored,
      [name]: value
    })
  }

  const handleClear = () => {
    localStorage.removeItem('form');
  }

  return (
    <Section name='contactForm' header='Contact Me'>
      <Form id='contactForm' className='w-50 vh-100 my-5 d-flex flex-column mx-auto ' onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control defaultValue={stored.name} onChange={handleChange} name="name" type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
            defaultValue={stored.email}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control onChange={handleChange}
            name="message"
            type="text"
            placeholder="Enter message"
            as="textarea"
            rows={10}
            defaultValue={stored.message}
            style={{ resize: 'none' }}
          />
        </Form.Group>

        <div className='d-flex align-items-center justify-content-end'>
          <Button className="mr-2" variant="danger" onSubmit={handleClear}>
            Clear
        </Button>
          <Button type="submit" variant="success" onSubmit={handleSubmit}>
            Submit
        </Button>
        </div>
      </Form>
    </Section>
  );
}

export default ContactForm;
