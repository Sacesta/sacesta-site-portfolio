import { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
    text: string;
    speed?: number;
    maxIterations?: number;
    className?: string;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    animateOn?: 'view' | 'hover';
    sequential?: boolean;
}

export default function DecryptedText({
    text,
    speed = 50,
    maxIterations = 10,
    className = '',
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
    animateOn = 'hover',
    sequential = false,
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());

    // FIX: Correct setInterval type
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        let currentIteration = 0;

        const getNextChar = () => {
            if (useOriginalCharsOnly) {
                const index = Math.floor(Math.random() * text.length);
                return text[index];
            }
            const index = Math.floor(Math.random() * characters.length);
            return characters[index];
        };

        const scramble = () => {
            if (sequential) {
                if (revealedIndices.size < text.length) {
                    const nextIndex =
                        revealDirection === 'start'
                            ? revealedIndices.size
                            : revealDirection === 'end'
                                ? text.length - 1 - revealedIndices.size
                                : Math.floor(text.length / 2) +
                                (revealedIndices.size % 2 === 0
                                    ? revealedIndices.size / 2
                                    : -(revealedIndices.size + 1) / 2);

                    setRevealedIndices(prev => new Set(prev).add(nextIndex));
                } else {
                    clearInterval(interval);
                }

                setDisplayText(prev =>
                    prev
                        .split('')
                        .map((char, i) => {
                            if (revealedIndices.has(i) || char === ' ') return text[i];
                            return getNextChar();
                        })
                        .join('')
                );

                return;
            }

            setDisplayText(prev =>
                prev
                    .split('')
                    .map((char, i) => {
                        if (char === ' ') return char;
                        if (currentIteration >= maxIterations) return text[i];
                        return getNextChar();
                    })
                    .join('')
            );

            currentIteration++;

            if (currentIteration > maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
            }
        };

        if (animateOn === 'view' || (animateOn === 'hover' && isHovering)) {
            interval = setInterval(scramble, speed);
            intervalRef.current = interval;
        } else {
            setDisplayText(text);
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [
        text,
        speed,
        maxIterations,
        revealDirection,
        useOriginalCharsOnly,
        characters,
        animateOn,
        isHovering,
        sequential,
        revealedIndices,
    ]);

    // Reset for sequential animation
    useEffect(() => {
        if (animateOn === 'view') {
            setRevealedIndices(new Set());
        }
    }, [text, animateOn]);

    return (
        <span
            className={className}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {displayText}
        </span>
    );
}
