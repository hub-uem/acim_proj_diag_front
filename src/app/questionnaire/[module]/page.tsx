'use client'

import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useCheckDeadlineQuery } from '@/redux/features/questionnaireApiSlice'; 
import { useAsyncValue } from '@/hooks/index'; 

type Params = Promise< {module: string}>

export default function Questionnaire(props: {params: Params}) {

    const resolvedParams = useAsyncValue(props.params);
    const { data, isLoading, error, refetch } = useCheckDeadlineQuery(resolvedParams?.module, {
        skip: !resolvedParams?.module,
        refetchOnMountOrArgChange: true
    });

    useEffect(() => {
        if (data) {
            refetch();
        }
    }, [data, refetch]);

    
    return (
        <>
            <div className='min-h-screen bg-gradient-to-r from-teal via-teal-primary-opc to-teal-secundary flex items-center justify-center p-4 md:p-12'>
                <div
                    className='pt-12 px-4 pb-20 md:p-16 md:pb-36 '>
                    <div
                        className='flex flex-col max-w-4xl mx-auto space-y-8'
                    >
                        <div className='flex flex-col'>
                            <span className='text-teal-primary'>
                                Módulo
                            </span>
                            <h1 className='text-4xl md:text-6xl text-bleached-silk font-bold mb-4'>
                                Diagnóstico Organizacional
                            </h1>
                            <p className='text-zinc-300 mb-6'>
                                O Diagnóstico Organizacional é uma ferramenta essencial para entender a saúde da sua empresa.
                                Ele ajuda a identificar pontos fortes e áreas que precisam de melhorias, permitindo que você
                                tome decisões informadas para o futuro do seu negócio.
                            </p>
                        </div>

                         {isLoading ? (
                                 <span className="text-bleached-silk">Verificando disponibilidade...</span>
                             ) : error ? (
                                 <span className="text-red-500">Erro ao verificar o prazo.</span>
                             ) : data?.ok_response ? (
                                 <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center p-4 bg-brack-wash rounded-md border border-teal-primary'>
                                    <div className="flex flex-col items-center">
                                         <a className='text-bleached-silk font-semibold'>
                                            Número de Questões
                                         </a>
                                    </div>
                                    <div className='w-full md:w-[1px] h-[1px] md:h-12 bg-teal-primary'></div>
                                    <div className="flex flex-col items-center">
                                         <a className='text-bleached-silk font-semibold'>
                                            Tempo Estimado
                                         </a>
                                     </div>
                                     <div className='w-full md:w-[1px] h-[1px] md:h-10 bg-teal-primary'></div>
                                     <Link
                                         href='/questionnaire/x/Diagnóstico Organizacional'
                                         className='block w-full text-center py-2 px-4 bg-teal-primary text-white font-semibold rounded-md hover:bg-teal-primary-opc'>
                                         Iniciar Questionário
                                     </Link>
                                 </div>
                             ) : (
                                 <span className="text-center text-bleached-silk font-semibold border-b-2 border-teal-secundary">{data?.message}</span>
                             )
                         }
                    </div>
                </div>
            </div >
        </>
    );
}