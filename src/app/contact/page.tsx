import { Metadata } from "next"
import { ContactForm } from "@/components/forms";

export const metadata: Metadata = {
    title: "Projeto Diagnóstico | Contato",
};

export default function About() {
    return (
        <>
            <div className='min-h-screen p-12 dark:bg-teal-secundary'>
                <div className='flex flex-col max-w-md mx-auto bg-teal-primary dark:bg-teal rounded-md border-2 border-teal-secundary dark:border-black-wash'>
                    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                        <h2 className='text-bleached-silk mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
                            Entre em Contato
                        </h2>
                    </div>

                    <div className=' text-bleached-silk m-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}