import React from 'react';

interface LikertScaleProps {
    numOptions: number;
    selectedOption: number | null;
    setSelectedOption: (index: number) => void;
}

const calculateOptionSize = (index: number, numOptions: number): number => {
    const center = Math.floor(numOptions / 2);
    const distanceFromCenter = Math.abs(index - center);
    return 20 + distanceFromCenter * 8;
};

export default function LikertScale({ numOptions, selectedOption, setSelectedOption }: LikertScaleProps) {
    return (
        <div className='flex w-full justify-center items-center md:space-x-8'>
            <h1 className='hidden font-semibold md:block'> Discordo </h1>
            <div className='flex flex-col md:flex-row items-center space-y-4'>
                <div className='flex items-center space-x-4 sm:space-x-8'>
                    {Array.from({ length: numOptions }, (_, index) => {
                        const size = calculateOptionSize(index, numOptions);
                        const isSelected = selectedOption === index;
                        return (
                            <div
                                key={index}
                                className={`flex items-center justify-center font-semibold rounded-full cursor-pointer hover:text-teal hover:border-teal dark:border-bleached-silk dark:hover:text-hover-glow dark:hover:border-hover-glow 
                            ${isSelected ? 'bg-teal text-bleached-silk hover:text-bleached-silk dark:bg-hover-glow dark:hover:text-bleached-silk' : 'border-2 border-teal text-bleached-silk '}
                        `}
                                style={{
                                    width: `calc(3vw + ${size}px)`,
                                    height: `calc(3vw + ${size}px)`,
                                }}
                                onClick={() => setSelectedOption(index)}
                            >
                                {index + 1}
                            </div>
                        );
                    })}
                </div>
                <div className='flex w-full justify-between md:hidden'>
                    <h1> Disccordo </h1>
                    <h1> Concordo </h1>
                </div>
            </div>
            <h2 className='hidden font-semibold md:block'> Concordo </h2>
        </div>
    );
}