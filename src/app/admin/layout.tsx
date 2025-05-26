import type { Metadata } from 'next';

interface Props {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Admin',
    description: 'administração do projeto diagnóstico',
};

export default function Layout({ children }: Props) {
    return <>{children}</>;
}