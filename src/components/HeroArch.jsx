import React from 'react';

const HeroArch = ({ children }) => {
    return (
        <div style={{
            position: 'relative',
            padding: '4rem 2rem',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #151518, #0f0f10)',
            overflow: 'hidden',
            borderBottom: '4px solid var(--border-gold)'
        }}>
            {/* Arch Shape Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%',
                height: '100%',
                border: '40px solid #1a1b1e', // Dark Stone Pillars
                borderRadius: '50% 50% 0 0', // Arch top
                borderBottom: 'none',
                pointerEvents: 'none',
                boxShadow: 'inset 0 0 50px rgba(0,0,0,0.9)',
                zIndex: 1
            }}></div>

            {/* Inner Gold Trim */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '115%',
                height: '100%',
                border: '2px solid var(--forge-gold)',
                borderRadius: '50% 50% 0 0',
                borderBottom: 'none',
                opacity: 0.5,
                pointerEvents: 'none',
                zIndex: 1
            }}></div>

            {/* Content Container */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                maxWidth: '800px',
                margin: '0 auto',
                paddingTop: '60px' // Clear arch top
            }}>
                {children}
            </div>
        </div>
    );
};

export default HeroArch;
