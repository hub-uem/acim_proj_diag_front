'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		email,
		username,
		cnpj,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const config = [
		{
			labelText: 'Endereço de Email',
			labelId: 'email',
			type: 'email',
			value: email,
			required: true,
		},
		{
			labelText: 'Nome de Usuário',
			labelId: 'username',
			type: 'text',
			value: username,
			required: true,
		},
		{
			labelText: 'CNPJ',
			labelId: 'cnpj',
			type: 'text',
			value: cnpj,
			required: true,
		},
		{
			labelText: 'Senha',
			labelId: 'password',
			type: 'password',
			value: password,
			required: true,
		},
		{
			labelText: 'Confirme a Senha',
			labelId: 're_password',
			type: 'password',
			value: re_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Criar conta'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}