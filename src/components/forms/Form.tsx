import { ChangeEvent, FormEvent } from 'react';
import { Input } from '@/components/forms';
import { Spinner } from '@/components/common';

interface Option {
    label: string;
    value: string;
}

interface Config {
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    link?: {
        linkText: string;
        linkUrl: string;
    };
    required?: boolean;
    options?: Option[];
}

interface Props {
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    errors?: {[key: string]: string};
}

export default function Form({
    config,
    isLoading,
    btnText,
    onChange,
    onSubmit,
    errors,
}: Props) {
    return (
        <form className='rounded-md space-y-6' onSubmit={onSubmit}>
            {config.map(input => (
                <div key={input.labelId} className='space-y-1'>
                    <Input
                        key={input.labelId}
                        labelId={input.labelId}
                        type={input.type}
                        onChange={onChange}
                        value={input.value}
                        link={input.link}
                        required={input.required}
                        options={input.options} 
                    >
                        {input.labelText}
                    </Input>

                    {errors?.[input.labelId]?.[0] && (
                        <p className="text-sm text-red-500">{errors[input.labelId][0]}</p>
                    )}
                </div>   
            ))}

            <div>
                <button
                    type='submit'
                    className='flex w-full justify-center rounded-md bg-teal-secundary dark:bg-teal-primary py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-teal-secundary-opc  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hover-glow dark:houve:bg-teal-primary-opc'
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner sm /> : `${btnText}`}
                </button>
            </div>
        </form>
    );
}