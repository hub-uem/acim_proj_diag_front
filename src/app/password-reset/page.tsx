import { PasswordResetForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Full Auth | Password Reset',
    description: 'Full Auth password reset page',
};

export default function Page() {
    return (
        <main className='min-h-screen p-12'>
            <div className='flex flex-col max-w-md mx-auto dark:bg-gunmetal rounded-md border-2 border-blue-darknut'>
                <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                    <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                        Redefina sua senha
                    </h2>
                </div>

                <div className='m-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                    <PasswordResetForm />
                </div>
            </div>
        </main>
    );
}