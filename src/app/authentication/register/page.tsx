import Link from 'next/link';
import { RegisterForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Criar conta',
    description: 'Criar conta Projeto Diagnóstico',
};

export default function Page() {
    return (
        <main className='min-h-screen p-4 md:p-12 dark:bg-teal-secundary'>
            <div className='flex flex-col max-w-md mx-auto bg-teal-primary dark:bg-teal rounded-md border-2 border-teal-secundary dark:border-black-wash'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='text-bleached-silk mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                        Crie sua conta
                    </h2>
                </div>

                <div className='text-bleached-silk min-w-full px-2 sm:px-4 md:px-6 py-10'>
                    <RegisterForm />

                    <p className='mt-10 text-center text-sm font-medium'>
                        Já possui uma conta?{' '}
                        <span className='inline-block'>
                            <Link
                                href='/authentication/login'
                                className='text-teal-secundary dark:text-teal-primary font-extrabold'
                            >
                                Entre aqui
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </main>
    );
}