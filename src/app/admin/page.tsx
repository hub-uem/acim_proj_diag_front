import Link from 'next/link';

export default function Page() {
    const modules = [
        {
            id: 'create-questionnaire',
            title: 'Criar Questionário',
            description: 'Crie um novo questionário para o diagnóstico empresarial.',
        },
        {
            id: 'view-results',
            title: 'Ver Resultados',
            description: 'Veja os resultados das empresas participantes.',
        },
    ];
    return (
        <>
            <main className='min-h-screen p-4 md:p-12'>
                <div className='flex flex-col items-center space-y-16'>
                    <h1 className='max-w-4xl mx-auto text-4xl md:text-6xl font-bold text-center text-hover-glow'>
                        Painel de Administração
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl'>
                        {modules.map((module) => (
                            <div
                                key={module.id}
                                className='flex flex-col p-6 border-2 border-black-wash hover:border-hover-glow hover:-translate-y-3 transition transform duration-500 rounded-lg min-h-[300px]'
                            >
                                <h2 className='text-center text-xl md:text-2xl font-semibold text-hover-glow mb-2'>{module.title}</h2>
                                <p className='mb-4 flex-grow text-gray-400'>{module.description}</p>
                                <Link
                                    href={`/admin/${module.id}`}
                                    className='mt-auto px-4 py-2 bg-blue-500 font-semibold text-white text-center rounded-md hover:bg-blue-600'
                                >
                                    Acessar
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}