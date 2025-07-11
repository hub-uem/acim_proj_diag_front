import { ChangeEvent } from 'react';
import Link from 'next/link';

interface Option {
    label: string;
    value: string;
}


interface Props {
    labelId: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    value: string;
    children: React.ReactNode;
    link?: {
        linkText: string;
        linkUrl: string;
    };
    required?: boolean;
    options?: Option[]; 
}

export default function Input({
    labelId,
    type,
    onChange,
    value,
    children,
    link,
    required = false,
    options = [],
}: Props) {
    return (
        <div>
            <div className='flex justify-between align-center'>
                <label
                    htmlFor={labelId}
                    className='block text-sm font-medium leading-6'
                >
                    {children}
                </label>
                {link && (
                    <div className='text-sm text-teal font-medium dark:text-teal-primary'>
                        <Link
                            className='font-semibold'
                            href={link.linkUrl}
                        >
                            {link.linkText}
                        </Link>
                    </div>
                )}
            </div>
            <div className='mt-2'>
                {type === 'select' ? (
                    <select
                        id={labelId}
                        name={labelId}
                        value={value}
                        onChange={onChange}
                        required={required}
                        className="block w-full rounded-md px-1.5 py-1.5 text-black-wash dark:bg-off-white dark:text-bleached-silk shadow-md focus:ring-40 focus:ring-inset focus:to-hover-glow sm:text-sm sm:leading-6"
                    >
                        <option value="">Selecione...</option>
                        {options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        id={labelId}
                        className='block w-full rounded-md px-1.5 py-1.5 text-black-wash dark:bg-off-white dark:text-bleached-silk shadow-md focus:ring-40 focus:ring-inset focus:to-hover-glow sm:text-sm sm:leading-6'
                        name={labelId}
                        type={type}
                        onChange={onChange}
                        value={value}
                        required={required}
                    />
                )}
            </div>
        </div>
    );
}