import Section from 'components/section/Section';
import emailjs from 'emailjs-com';
import { useLocalStorage } from 'hooks/useLocalStorage';
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { serviceId, templateId, userId } from '../../config.json';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const initialForm: ContactFormProps = { name: '', email: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState<ContactFormProps>(initialForm)
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [stored, setStored] = useLocalStorage('form', '{}');

  useEffect(() => {
    setForm(stored)
  }, [stored])

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, '#contactForm', userId)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setForm(initialForm);
      }, function (error) {
        console.log('Error');
      });

    setForm(initialForm)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (form.name.length > 3 && form.email.length > 3 && form.message.length > 3) {
      setDisabled(false);
    }

    setStored({
      ...form,
      [name]: value
    })

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setStored('form', initialForm)
    setForm(initialForm)
  };

  return (
    <Section name='contactForm' header='Contact Me'>
      <Form id='contactForm' className='w-50 vh-100 my-5 d-flex flex-column mx-auto ' onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control defaultValue={form.name} onChange={handleChange} name="name" type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleChange}
            name="email"
            type="email"
            placeholder="Enter email"
            defaultValue={form.email}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control onChange={handleChange}
            name="message"
            type="text"
            placeholder="Enter message"
            as="textarea"
            rows={3}
            defaultValue={form.message}
          />
        </Form.Group>
        <div className='d-flex align-items-center justify-content-between'>
          <Button variant="danger" onSubmit={handleClear}>
            Clear
        </Button>
          <Button disabled={isDisabled} type="submit" variant="success" onSubmit={handleSubmit}>
            Submit
        </Button>
        </div>
      </Form>
    </Section>
  );
}

export default ContactForm;
