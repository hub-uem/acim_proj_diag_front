import { ChangeEvent } from 'react';
import Link from 'next/link';

interface Props {
    labelId: string;
    type: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    children: React.ReactNode;
    link?: {
        linkText: string;
        linkUrl: string;
    };
    required?: boolean;
}

export default function Input({
    labelId,
    type,
    onChange,
    value,
    children,
    link,
    required = false,
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
                    <div className='text-sm text-blue-darknut font-medium'>
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
                <input
                    id={labelId}
                    className='block w-full rounded-md px-1.5 py-1.5 text-black-wash dark:text-bleached-silk shadow-md focus:ring-2 focus:ring-inset focus:to-blue-darknut sm:text-sm sm:leading-6'
                    name={labelId}
                    type={type}
                    onChange={onChange}
                    value={value}
                    required={required}
                />
            </div>
        </div>
    );
}