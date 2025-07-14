import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        cnpj: '',
        porte: '',
        setor: '',
        password: '',
        re_password: '',
    });

    const { email, username, cnpj, porte, setor, password, re_password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors({});

        register(formData)
            .unwrap()
            .then(() => {
                toast.success('Por favor verifique seu email para ativar sua conta');
                router.push('/authentication/login');
            })
            .catch((error) => {
                console.error('Registration error:', error);
                toast.error('Falha ao registrar conta');

                if (error.response?.status === 422) {
                    setErrors(error.data.errors);
                } else if (error?.data?.message) {
                    // Caso backend retorne erro genérico
                    setErrors({ general: error.data.message });
                } else {
                    setErrors({ general: 'Erro desconhecido' });
                }
            });
    };

    return {
        email,
        username,
        cnpj,
        porte,
        setor,
        password,
        re_password,
        isLoading,
        onChange,
        onSubmit,
        errors,
        setErrors
    };
}