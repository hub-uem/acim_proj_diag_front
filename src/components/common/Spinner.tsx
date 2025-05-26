import cn from 'classnames';
import { Loader } from 'lucide-react';

interface Props {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
}

export default function Spinner({ sm, md, lg, xl }: Props) {
    const className = cn('animate-spin text-white-300 fill-white-300 mr-2', {
        'w-4 h-4': sm,
        'w-6 h-6': md,
        'w-8 h-8': lg,
        'w-12 h-12': xl,
    });

    return (
        <div role='status'>
            <Loader className={className} />
            <span className='sr-only'>Loading...</span>
        </div>
    );
}