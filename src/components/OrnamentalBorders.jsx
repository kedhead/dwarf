import React from 'react';

const OrnamentalBorders = () => {
    const runeStyle = {
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '60px',
        background: '#1a1a1e',
        borderLeft: '2px solid #0a0a0a',
        borderRight: '2px solid #0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '2rem 0',
        zIndex: 50,
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
    };

    const runes = ['ᚱ', 'ᚲ', 'ᛃ', 'ᛈ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ'];

    return (
        <div className="ornamental-borders">
            <style>{`
                @media (max-width: 1024px) {
                    .ornamental-borders { display: none !important; }
                }
            `}</style>
            {/* Left Border */}
            <div style={{ ...runeStyle, left: 0 }}>
                {runes.map((rune, i) => (
                    <span key={`l-${i}`} style={{
                        color: '#ff9f43',
                        fontSize: '1.5rem',
                        fontFamily: "'Cinzel', serif",
                        textShadow: '0 0 10px rgba(255, 159, 67, 0.6)',
                        opacity: 0.7
                    }}>
                        {rune}
                    </span>
                ))}
            </div>

            {/* Right Border */}
            <div style={{ ...runeStyle, right: 0 }}>
                {runes.map((rune, i) => (
                    <span key={`r-${i}`} style={{
                        color: '#ff9f43',
                        fontSize: '1.5rem',
                        fontFamily: "'Cinzel', serif",
                        textShadow: '0 0 10px rgba(255, 159, 67, 0.6)',
                        opacity: 0.7
                    }}>
                        {rune}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default OrnamentalBorders;
