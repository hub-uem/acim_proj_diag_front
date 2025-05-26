'use client';

import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
    const { email, password, isLoading, onChange, onSubmit } = useLogin();

    const config = [
        {
            labelText: 'Endereço de Email',
            labelId: 'email',
            type: 'email',
            value: email,
            required: true,
        },
        {
            labelText: 'Senha',
            labelId: 'password',
            type: 'password',
            value: password,
            link: {
                linkText: 'Esqueceu sua senha?',
                linkUrl: '/password-reset',
            },
            required: true,
        },
    ];

    return (
        <Form
            config={config}
            isLoading={isLoading}
            btnText='Entrar'
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}