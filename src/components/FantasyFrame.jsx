import React from 'react';

const FantasyFrame = ({ children, className = '', hoverable = false }) => {
    return (
        <div
            className={`fantasy-frame ${className}`}
            style={{
                position: 'relative',
                background: '#1c1917',
                padding: '3px', // Border width
                clipPath: 'polygon(0% 10px, 10px 0%, 100% 0%, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0% 100%)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                transform: hoverable ? 'translateY(0)' : 'none',
                cursor: hoverable ? 'pointer' : 'default',
            }}
            onMouseEnter={(e) => {
                if (hoverable) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.querySelector('.inner-content').style.borderColor = '#f59e0b';
                    e.currentTarget.querySelector('.inner-content').style.boxShadow = 'inset 0 0 20px rgba(245, 158, 11, 0.1)';
                }
            }}
            onMouseLeave={(e) => {
                if (hoverable) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.querySelector('.inner-content').style.borderColor = '#44403c';
                    e.currentTarget.querySelector('.inner-content').style.boxShadow = 'none';
                }
            }}
        >
            {/* Inner Content Container */}
            <div
                className="inner-content"
                style={{
                    background: '#0a0a0a',
                    height: '100%',
                    width: '100%',
                    padding: '2rem',
                    clipPath: 'inherit',
                    border: '1px solid #44403c',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    position: 'relative',
                }}
            >
                {/* Texture Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
                    opacity: 0.5,
                    pointerEvents: 'none'
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FantasyFrame;
