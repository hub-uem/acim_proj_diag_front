import { Building, LaptopMinimal, BookOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    const sections = [
        {
            id: 1,
            icon: <Building className='text-hover-glow font-semibold' />,
            title: 'Organizacional',
            description: 'Avalie a situação empresarial de sua empresa.',
        },
        {
            id: 2,
            icon: <LaptopMinimal className='text-hover-glow font-semibold' />,
            title: 'Marketing',
            description: 'Avalie a situação empresarial de sua empresa.',
        },
        {
            id: 3,
            icon: <BookOpen className='text-hover-glow font-semibold' />,
            title: 'Financeiro',
            description: 'Avalie a situação empresarial de sua empresa.',
        },
        {
            id: 4,
            icon: <Building className='text-hover-glow font-semibold' />,
            title: 'Organizacional',
            description: 'Avalie a situação empresarial de sua empresa.',
        },
        {
            id: 5,
            icon: <LaptopMinimal className='text-hover-glow font-semibold' />,
            title: 'Marketing',
            description: 'Avalie a situação empresarial de sua empresa.',
        },
        {
            id: 6,
            icon: <BookOpen className='text-hover-glow font-semibold' />,
            title: 'Financeiro',
            description: 'Avalie a situação empresarial de sua empresa.',
        },
    ];

    return (
        <>
            <div className='min-h-screen relative mb-24'>
                <div className='h-[556px] w-full relative flex bg-midnight-blue'>
                    <Image
                        src='/home/building.jpg'
                        alt='Arranha-céu'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 0%',
                        }}
                        className='opacity-30 blur-xs'
                    />
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-center max-w-4xl mx-auto'>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl text-bleached-silk font-bold mb-6'>
                            Transforme o Futuro da Sua Empresa
                        </h1>
                        <p className='justify-center text-sm sm:text-base md:text-xl mb-6 text-bleached-silk p-4 md:p-8'>
                            Descubra o potencial oculto da sua empresa! Nosso sistema oferece uma análise detalhada
                            e estratégica para identificar áreas de melhoria e oportunidades de crescimento.
                            Com o <strong>Módulo de Questionário</strong>, você terá acesso a insights valiosos que irão revolucionar
                            a forma como você toma decisões.
                        </p>
                        <Link
                            href='/questionnaire'
                            className='w-fit inline-block px-6 py-3 font-semibold text-bleached-silk bg-hover-glow rounded-lg shadow-md hover:bg-vivid-cerulean transition md-4'>
                            Acessar o Questionário
                        </Link>
                    </div>
                </div>
                <div className="w-full bg-white dark:bg-gunmetal">
                    <div className="flex flex-col lg:flex-row items-center justify-center py-24 px-12 lg:px-28 lg:space-x-20">
                        <div className="flex flex-col w-full">
                            <h1 className="mb-12 text-4xl sm:text-5xl text-center text-royal-blue dark:text-hover-glow font-bold">
                                Desenvolvido por Empresários Especialistas
                            </h1>
                            <div className="text-justify py-8">
                                <p className="text-gray-700 dark:text-gray-300">
                                    O <strong>Módulo de Questionário</strong> foi cuidadosamente elaborado por empresários especialistas ligados à
                                    <strong> ACIM – Associação Comercial e Empresarial de Maringá</strong>. Com base em vivências reais do mercado e conhecimento prático acumulado ao longo de décadas, o conteúdo oferece uma análise estratégica e confiável para impulsionar sua empresa.
                                </p>
                                <p className="mt-4 text-gray-700 dark:text-gray-300">
                                    A ACIM é reconhecida como um dos pilares do empreendedorismo em Maringá, reunindo mais de 5.000 empresas em prol do desenvolvimento regional. A expertise dos seus associados garante que você tenha acesso a uma ferramenta feita por quem vive o dia a dia dos negócios.
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col w-full aspect-[16/9] z-0">
                            <Image
                                src="/home/acim.webp"
                                alt="Foto do prédio da ACIM"
                                fill={true}
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "50% 40%",
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='p-12 flex flex-col justify-center items-center bg-bleached-silk dark:bg-midnight-blue'>
                    <h1 className='mb-12 sm:text-5xl text-royal-blue dark:text-hover-glow font-bold'>O que Avaliamos</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto justify-items-center place-items-center py-12 gap-8'>
                        {sections.map((section) => (
                            <div
                                key={section.id}
                                className='flex flex-col rounded-md w-52 h-52 sm:w-64 sm:h-64 md:p-4 lg:w-60 lg:h-60 lg:p-6 justify-center items-center border-2 bg-white dark:bg-midnight-blue border-gray-light dark:border-gunmetal hover:border-hover-glow  dark:hover:border-hover-glow hover:-translate-y-3 transition transform duration-500'
                            >
                                {section.icon}
                                <p className='text-base md:text-xl font-semibold text-hover-glow'>{section.title}</p>

                                <p className='text-sm text-center text-gray-400'>{section.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}