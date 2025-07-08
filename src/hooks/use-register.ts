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

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
};

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        register(formData)
            .unwrap()
            .then(() => {
                toast.success('Por favor verifique seu email para ativar sua conta');
                router.push('/authentication/login');
            })
            .catch((error) => {
                console.error('Registration error:', error);
                toast.error('Falha ao registrar conta');
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
    };
}