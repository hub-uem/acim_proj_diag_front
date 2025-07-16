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
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});

    const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        if (fieldErrors[name]) {
            setFieldErrors((prev) => ({...prev, [name]: ''}));
        }
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFieldErrors({});

        register(formData)
            .unwrap()
            .then(() => {
                toast.success('Por favor verifique seu email para ativar sua conta');
                router.push('/authentication/login');
            })
            .catch((error) => {
                const mappedErros: {[key: string]: string} = {};
                const campos = Object.keys(formData)
                for (const erro in error.data) {
                    if (campos.includes(erro)) {
                        if  (erro === 'username') {
                            mappedErros[erro] = "Este nome já se encontrada cadastrado";
                        } else if (erro === 'cnpj') {
                            mappedErros[erro] = "CNPJ inválido!"
                        } else if (erro === 'email') {
                             mappedErros[erro] = "Este e-mail já se encontrada cadastrado"
                        }
                    }
                    else {
                        mappedErros['password'] = error.data[erro]
                    }
                } 
                setFieldErrors(mappedErros); 
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
        fieldErrors,
    };
}