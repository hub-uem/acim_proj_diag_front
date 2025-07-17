import { useState, ChangeEvent, FormEvent } from 'react';
import { useResetPasswordMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useResetPassword() {
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const [email, setEmail] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setEmail(event.target.value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        resetPassword(email)
            .unwrap()
            .then(() => {
                toast.success('Solicitação enviada, verifique seu e-mail para obter o link de redefinição');
            })
            .catch(() => {
                toast.error('Falha ao enviar solicitação');
            });
    };

    return {
        email,
        isLoading,
        onChange,
        onSubmit,
    };
}