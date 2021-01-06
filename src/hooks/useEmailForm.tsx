import { ContactFormProps } from 'components/contacts-form/ContactForm.types';
import emailjs from 'emailjs-com';
import { ChangeEvent, FormEvent, useState } from "react";
import { serviceId, templateId, userId } from '../config.json';

export const useEmailForm = () => {
    const initialForm: ContactFormProps = { name: '', email: '', message: '' }
    const [form, setForm] = useState<ContactFormProps>(initialForm)

    const submitEmail = (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
        e.preventDefault();

        emailjs.sendForm(serviceId, templateId, '#contactForm', userId)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                setForm(initialForm);
            }, function (error) {
                console.log('Error');
            });
    };

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        })
    }

    return { form, submitEmail, changeEmail }
}