'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useActivationMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';
import { TypeAnimation } from 'react-type-animation';

export default function Page() {
    const router = useRouter();
    const params = useParams();

    const [activation] = useActivationMutation();

    useEffect(() => {
        const { uid, token } = params;

        activation({ uid, token })
            .unwrap()
            .then(() => {
                toast.success('Conta ativada');
            })
            .catch(() => {
                toast.error('Falha ao ativar conta');
            })
            .finally(() => {
                router.push('/authentication/login');
            });
    }, [activation, params, router]);

    return (
        <>
            <main className='min-h-screen p-4 md:p-12'>
                <div className='flex justify-center pt-36'>
                    <h1 className='text-4xl md:text-6xl font-bold'>
                        Ativando conta
                        <TypeAnimation
                            sequence={[
                                '.',
                                250,
                                '..',
                                250,
                                '...',
                                250,
                                '',
                                250,
                            ]}
                            wrapper='span'
                            speed={50}
                            omitDeletionAnimation={true}
                            repeat={Infinity}
                            cursor={false}
                        />
                    </h1>
                </div>
            </main>
        </>
    );
}