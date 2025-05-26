import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="w-full pt-8 p-2 bg-off-white dark:bg-midnight-blue border-t border-midnight-blue dark:border-blue-darknut text-center">
                <a className="text-sky-500">
                    acim@acim.com.br
                </a>
                <p className="my-5 leading-normal">
                    R. Ver. Basílio Sautchuk, 388
                    <br />
                    Zona 01, 87013-190
                    <br />
                    Maringá - PR
                </p>
                <nav>
                    <a className="inline-flex items-center hover:text-blue-darknut">
                        <Instagram />
                    </a>
                </nav>
            </footer >
        </>
    );
}