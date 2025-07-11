import Link from 'next/link';
import Image from 'next/image';
export default function QuestionnairePage() {
    const modules = [
        {
            id: 1,
            title: 'Módulo 1: Introdução',
            description: 'Este módulo aborda os conceitos básicos do diagnóstico empresarial.',
            questions: 10,
            estimatedTime: '15 minutos',
        },
        {
            id: 2,
            title: 'Módulo 2: Estratégias de Mercado',
            description: 'Explore estratégias para melhorar sua posição no mercado.',
            questions: 12,
            estimatedTime: '20 minutos',
        },
        {
            id: 3,
            title: 'Módulo 3: Gestão Financeira',
            description: 'Aprenda a gerenciar melhor os recursos financeiros da sua empresa.',
            questions: 15,
            estimatedTime: '25 minutos',
        },
    ];

    return (
        <>
            <div className='w-screen min-h-screen flex flex-col items-center space-y-8 dark:bg-teal-secundary'>
                <div className='h-[556px] w-full relative flex bg-teal'>
                    <Image
                        src='/questionnaire/stock.jpg'
                        alt='Celular com gráfico do mercado financeiro'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 20%',
                        }}
                        className='opacity-30 blur-xs'
                    />
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
                        <h1 className=' max-w-6xl mx-auto text-4xl sm:text-5xl md:text-6xl text-bleached-silk font-bold mb-12'>
                            Bem-vindo ao Sistema de Diagnóstico Empresarial
                        </h1>
                        <p className='justify-center text-sm sm:text-base md:text-xl mb-6 text-bleached-silk p-4 md:p-8  max-w-3xl mx-auto'>
                            Nosso objetivo é ajudá-lo a identificar pontos fortes e oportunidades de melhoria na sua empresa.
                            Escolha um módulo e comece agora mesmo!
                        </p>
                    </div>
                </div>
                <div className='p-12 pb-32'>
                    <p className='text-teal text-center text-2xl max-w-4xl mx-auto mb-12 dark:text-bleached-silk'>
                        Escolha um dos módulos abaixo para começar o diagnóstico. Cada módulo foi desenvolvido para abordar
                        aspectos específicos da sua empresa e fornecer insights valiosos.
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className='flex flex-col p-6 border-2 bg-white border-gray-light hover:border-teal-primary dark:border-gray-light dark:hover:border-hover-glow hover:-translate-y-3 transition transform duration-500 rounded-lg min-h-[300px] dark:bg-teal dark:hover:border-teal-primary dark:border-black-wash '
                            >
                                <h2 className='text-base md:text-xl font-semibold mb-2'>{module.title}</h2>
                                <p className='mb-4 flex-grow text-gray-400'>{module.description}</p>
                                <div className='flex justify-between items-center text-gray-500 mb-4'>
                                    <span>{module.questions} questões</span>
                                    <span>{module.estimatedTime}</span>
                                </div>
                                <Link
                                    href={`/questionnaire/${module.id}`}
                                    className='mt-auto px-4 py-2 bg-teal-primary font-semibold text-white text-center rounded-md hover:bg-teal-primary-opc dark:bg-teal-primary'
                                >
                                    Acessar Módulo
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>
    );
}