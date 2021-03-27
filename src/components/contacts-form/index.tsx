import React from "react";
import { Button, Form } from "react-bootstrap";
import Section from "../section";
import useEmail from "./useEmail";

function ContactForm() {
  const { form, submitEmail, changeEmail } = useEmail();

  return (
    <Section name="contactForm" header="Contact Me">
      <Form
        id="contactForm"
        className="w-50 vh-100 d-flex flex-column mx-auto "
        onSubmit={submitEmail}
      >
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={form.name}
            onChange={changeEmail}
            name="name"
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={changeEmail}
            name="email"
            type="email"
            placeholder="Enter email"
            defaultValue={form.email}
          />
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            onChange={changeEmail}
            name="message"
            type="text"
            placeholder="Enter message"
            as="textarea"
            rows={10}
            defaultValue={form.message}
            style={{ resize: "none" }}
          />
        </Form.Group>

        <div className="d-flex justify-content-end">
          <Button type="submit" variant="success" onSubmit={submitEmail}>
            Submit
          </Button>
        </div>
      </Form>
    </Section>
  );
}

export default ContactForm;
