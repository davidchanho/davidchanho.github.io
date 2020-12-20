import emailjs from 'emailjs-com';
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactsProps } from "types/types";
import { serviceId, templateId, userId } from '../config.json';

const initialForm = { name: '', email: '', message: '' }

function Contacts({ setMessage }: { setMessage: any }) {
  const [form, setForm] = useState<ContactsProps>(initialForm)
  const [isDisabled, setDisabled] = useState<boolean>(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, '#contactForm', userId)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        setForm(initialForm);
        setMessage('Email successfully sent!')
      }, function (error) {
        setMessage('Bummer, something went wrong.')
      });
    setForm(initialForm)
  };


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (form.name.length > 3 && form.email.length > 3 && form.message.length > 3) {
      setDisabled(false);
    }

    setForm({
      ...form,
      [name]: value
    })
  }

  return (
    <Form id='contactForm' className='w-50 vh-100 my-5 d-flex flex-column mx-auto ' onSubmit={handleSubmit}>
      <h1>Contact Me</h1>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} name="name" type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange}
          name="email"
          type="email"
          placeholder="Enter email"
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
        />
      </Form.Group>
      <Button disabled={isDisabled} type="submit" variant="success" className="ml-auto" onSubmit={handleSubmit}>
        Submit
        </Button>
    </Form>
  );
}

export default Contacts;
