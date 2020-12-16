import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { ContactsProps } from "types/types";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  message: yup.string().required(),
});

function Contacts() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: ContactsProps) => {
    console.log(data);
  };

  return (
    <Form className='w-50 my-5 d-flex flex-column justify-content-center' onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Me</h1>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter name" />
        <Form.Text className="text-muted">
          {errors.name && "Name is required."}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          ref={register({ required: true })}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          {errors.email && "Email is required."}
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control
          name="message"
          type="text"
          placeholder="Enter message"
          as="textarea"
          rows={3}
          ref={register({ required: true })}
        />
        <Form.Text className="text-muted">
          {errors.message && "Message is required."}
        </Form.Text>
      </Form.Group>

      <Button type="submit" variant="success" className="ml-auto">
        Submit
        </Button>
    </Form>
  );
}

export default Contacts;
