'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		email,
		username,
		cnpj,
		company_size,
		sector,
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
			labelText: 'Nome completo',
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
			labelText: 'Porte da empresa',
			labelId: 'company_size',
			type: 'select',
			value: company_size,
			required: true,
			options: [
				'Profissional liberal',
				'MEI',
				'EPP',
				'ME',
				'Média',
				'Grande'
			],
		},
		{
			labelText: 'Setor da empresa',
			labelId: 'sector',
			type: 'select',
			value: sector,
			required: true,
			options: [
				'Setor A',
				'Setor B',
				'Setor C',
			],
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