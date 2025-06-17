import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Projeto Diagnóstico | Sobre',
};

export default function About() {
    return (
        <div className='flex flex-col w-full space-y-8 md:space-y-12 pb-12 bg-bleached-silk dark:bg-teal-secundary'>
            <div className="relative flex flex-col w-full h-72 sm:h-80 md:h-104 lg:h-[560px] z-0">
                <Image
                    src="/about-us/acim-evento.jpeg"
                    alt="Acim"
                    fill={true}
                    style={{
                        objectFit: "cover",
                        objectPosition: "50% 40%",
                    }}
                />
            </div>
            <div className='flex flex-col items-center w-full space-y-8 p-4 md:p-8'>
                <h1 className='text-5xl sm:text-6xl font-bold text-teal-primary'>
                    Quem Somos
                </h1>
                <p className='text-center max-w-4xl text-gunmental'>
                    A ACIM é a Casa do Empreendedor em Maringá. Com mais de 70 anos de atuação, hoje contamos com mais de 5.000 empresas unidas pelo propósito do associativismo.                </p>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center p-4 md:p-8 md:space-x-8'>
                <div className='relative flex flex-col w-full aspect-[16/9] p-8 z-0'>
                    <Image
                        src='/about-us/estande-acim.jpeg'
                        alt='Estande da ACIM'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 40%',
                        }}
                    />
                </div>
                <div className='flex flex-col py-4 md:p-8 w-full'>
                    <span className='text-4xl lg:text-6xl font-bold mb-10 text-teal-primary'>
                        Nossa Missão
                    </span>
                    <p className='text-gunmental'>
                        Somos ambiciosos quando se trata de trabalhar para impulsionar o empreendedorismo em Maringá e trabalhamos seguindo a visão de “estar entre as melhores associações empresariais do país na geração de valor aos seus associados e comunidade, articuladora de negócios sustentáveis, com visão de futuro e representação legítima junto a sociedade.”
                    </p>
                    <p>
                        Fazemos isso seguindo os valores de “participar da comunidade empresarial, representando-a e defendendo-a de forma transparente e confiável, tendo como princípios de conduta: integridade, competência e profissionalismo”.
                    </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row w-full items-center p-4 md:p-8 md:space-x-8'>
                <div className='md:hidden relative flex flex-col w-full aspect-[16/9] p-8 z-0'>
                    <Image
                        src='/about-us/acim-grupo.jpg'
                        alt='Grupo de pessoas na ACIM'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 40%',
                        }}
                    />
                </div>
                <div className='flex flex-col py-4 md:p-8 w-full'>
                    <h1 className='text-4xl lg:text-6xl font-bold mb-10 text-teal-primary'>
                        Nossa História
                    </h1>
                    <p className='text-gunmental'>
                        No ano de 1953, quando Maringá tinha apenas 6 anos desde sua fundação, surgiu a ACIM, como um pequeno grupo de empresários. Tendo o empresário Américo Marques Dias como primeiro presidente, a associação foi formada para atuar como uma entidade que daria voz, de maneira organizada, para as insatisfações da classe empresarial de Maringá.
                    </p>
                    <p>
                        Mais de 7 décadas depois, hoje a ACIM se estabeleceu como uma das instituições mais importantes para o desenvolvimento do nosso município. Não mais chamada de “Associação Comercial e Industrial de Maringá”, como era no início, e sim “Associação Comercial e Empresarial de Maringá”, a ACIM hoje conta com mais de 5.000 empresas filiadas, desde MEIs até grandes corporações.  Todos os dias, atuamos para fortalecer o empreendedorismo em nossa região e fazer de Maringá uma cidade melhor para todos que vivem nela.
                    </p>
                </div>

                <div className='hidden md:relative md:flex md:flex-col md:w-full md:aspect-[16/9] md:p-8 md:z-0'>
                    <Image
                        src='/about-us/acim-grupo.jpg'
                        alt='Grupo de pessoas na ACIM'
                        fill={true}
                        style={{
                            objectFit: 'cover',
                            objectPosition: '50% 40%',
                        }}
                    />
                </div>
            </div>
        </div >
    );
}