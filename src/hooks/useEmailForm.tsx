import { ContactFormProps } from "components/contacts-form/ContactForm.types";
import emailjs from "emailjs-com";
import { ChangeEvent, FormEvent, useState } from "react";

export const useEmailForm = () => {
  const initialForm: ContactFormProps = { name: "", email: "", message: "" };
  const [form, setForm] = useState<ContactFormProps>(initialForm);

  const submitEmail = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_serviceId,
    //     process.env.REACT_APP_templateId,
    //     "#contactForm",
    //     process.env.REACT_APP_userId
    //   )
    //   .then(
    //     function (response) {
    //       console.log("SUCCESS!", response.status, response.text);
    //       setForm(initialForm);
    //     },
    //     function (error) {
    //       console.log("Error");
    //     }
    //   );
  };

  const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return { form, submitEmail, changeEmail };
};
