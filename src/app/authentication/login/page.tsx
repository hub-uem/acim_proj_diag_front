import Link from 'next/link';
import { LoginForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Login',
    description: 'Login Projeto Diagnóstico',
};

export default function Page() {
    return (
        <main className='min-h-screen p-4 md:p-12 dark:bg-teal-secundary'>
            <div className='flex flex-col max-w-md mx-auto dark:bg-teal rounded-md border-2 border-black-wash'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                        Entre em sua conta
                    </h2>
                </div>

                <div className='min-w-full px-2 sm:px-4 md:px-6 py-10'>
                    <LoginForm />

                    <p className='mt-10 text-center text-sm font-medium'>
                        Não tem uma conta?{' '}
                        <span className='inline-block'>
                            <Link
                                href='/authentication/register'
                                className='text-teal-primary font-extrabold'
                            >
                                Registre-se aqui
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}