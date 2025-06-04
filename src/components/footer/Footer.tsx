import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <>
            <footer className="w-full pt-8 p-2 bg-off-white dark:bg-teal border-t border-midnight-blue dark:border-teal text-center">
                <a className="text-teal-primary hover-glow">
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
                    <a className=" text-teal-primary inline-flex items-center hover:text-hover-glow">
                        <Instagram />
                    </a>
                </nav>
            </footer >
        </>
    );
}