'use client';

import { useState } from 'react';
import { Form } from '@/components/forms';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading] = useState(false);

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { id, value } = event.target;

        if (id === 'name') setName(value);
        if (id === 'email') setEmail(value);
        if (id === 'subject') setSubject(value);
        if (id === 'message') setMessage(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Formulário enviado:', { name, email, subject, message });
    };

    const config = [
        {
            labelText: 'Nome',
            labelId: 'name',
            type: 'text',
            value: name,
            required: true,
        },
        {
            labelText: 'Endereço de Email',
            labelId: 'email',
            type: 'email',
            value: email,
            required: true,
        },
        {
            labelText: 'Assunto',
            labelId: 'subject',
            type: 'text',
            value: subject,
            required: false,
        },
        {
            labelText: 'Mensagem',
            labelId: 'message',
            type: 'textarea',
            value: message,
            required: true,
        },
    ];

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText="Enviar"
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}