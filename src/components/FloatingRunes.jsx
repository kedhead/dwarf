import React, { useEffect, useState } from 'react';

const RUNES = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ', 'ᛈ', 'ᛇ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛜ', 'ᛞ', 'ᛟ'];

const FloatingRunes = () => {
    const [runes, setRunes] = useState([]);

    useEffect(() => {
        // Initial set of runes
        const initialRunes = Array.from({ length: 15 }).map((_, i) => createRune(i));
        setRunes(initialRunes);

        const interval = setInterval(() => {
            setRunes(prev => {
                // Remove runes that have floated up too far (simulated by replacing them)
                // In a real physics system we'd track Y position, but for CSS animation we just cycle logical IDs
                const newRune = createRune(Date.now());
                return [...prev.slice(1), newRune];
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const createRune = (id) => ({
        id,
        char: RUNES[Math.floor(Math.random() * RUNES.length)],
        left: Math.random() * 100 + '%',
        size: Math.random() * 1.5 + 1 + 'rem',
        duration: Math.random() * 5 + 10 + 's', // 10-15s float duration
        delay: Math.random() * 5 + 's',
        opacity: Math.random() * 0.3 + 0.1
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            {runes.map(rune => (
                <div
                    key={rune.id}
                    className="rune"
                    style={{
                        position: 'absolute',
                        left: rune.left,
                        bottom: '-50px', // Start below screen
                        fontSize: rune.size,
                        animationDuration: rune.duration,
                        animationDelay: rune.delay,
                        opacity: rune.opacity,
                        animationName: 'float', // Defined in index.css
                        color: 'rgba(197, 160, 89, 0.2)'
                    }}
                >
                    {rune.char}
                </div>
            ))}
        </div>
    );
};

export default FloatingRunes;
