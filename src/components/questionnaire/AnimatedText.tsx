import React from 'react';
import { TypeAnimation } from 'react-type-animation';

interface AnimatedTextProps {
    text: string;
}

export default function AnimatedText({ text }: AnimatedTextProps) {
    const ref = React.createRef<HTMLSpanElement>();
    const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

    const showCursorAnimation = (show: boolean) => {
        if (!ref.current) {
            return;
        }

        const el = ref.current;
        if (show) {
            el.classList.add(CURSOR_CLASS_NAME);
        } else {
            el.classList.remove(CURSOR_CLASS_NAME);
        }
    };

    return (
        <>
            <TypeAnimation
                ref={ref}
                cursor={false}
                className={`text-xl sm:text-2xl font-bold text-center ${CURSOR_CLASS_NAME}`}
                sequence={[
                    text,
                    () => showCursorAnimation(false),
                ]}
                style={{
                    whiteSpace: 'normal',
                    wordBreak: 'break-word',
                }}
            />

            <style global jsx>{`
            .custom-type-animation-cursor::after {
              content: '|';
              animation: cursor infinite step-start;
            }
            @keyframes cursor {
              50% {
                opacity: 0;
              }
            }`}
            </style>
        </>
    );
}