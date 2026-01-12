import React from 'react';
import { motion } from 'framer-motion';

const FantasyButton = ({
    children,
    onClick,
    variant = 'primary', // 'primary' | 'outline' | 'ghost'
    width = 'auto',
    className = '',
    disabled = false
}) => {

    // Base styles for all buttons
    const baseStyle = {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.8rem 2rem',
        fontFamily: 'var(--font-header)',
        fontSize: '1rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        border: 'none',
        outline: 'none',
        overflow: 'hidden',
        width: width === 'full' ? '100%' : 'auto',
        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: disabled ? 0.6 : 1,
    };

    // Variants
    const variants = {
        primary: {
            background: 'linear-gradient(180deg, #2D2A26 0%, #1c1917 100%)',
            color: '#f59e0b',
            boxShadow: `
                0 0 0 1px #44403c, 
                inset 0 1px 0 rgba(255,255,255,0.1), 
                0 4px 6px rgba(0,0,0,0.5)
            `,
            textShadow: '0 2px 4px rgba(0,0,0,0.8)',
        },
        outline: {
            background: 'transparent',
            color: '#f59e0b',
            boxShadow: 'inset 0 0 0 2px #44403c',
        },
        ghost: {
            background: 'transparent',
            color: '#a3a3a3',
        }
    };

    // Combined Style
    const style = { ...baseStyle, ...variants[variant] };

    return (
        <motion.button
            className={`fantasy-btn ${className}`}
            style={style}
            onClick={disabled ? null : onClick}
            whileHover={!disabled ? {
                scale: 1.02,
                color: '#fff',
                textShadow: '0 0 8px rgba(245, 158, 11, 0.8)',
                boxShadow: variant === 'primary'
                    ? `0 0 0 1px #f59e0b, inset 0 1px 0 rgba(255,255,255,0.2), 0 0 15px rgba(245, 158, 11, 0.4)`
                    : `inset 0 0 0 2px #f59e0b, 0 0 15px rgba(245, 158, 11, 0.2)`
            } : {}}
            whileTap={!disabled ? { scale: 0.96 } : {}}
        >
            {/* Texture Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`,
                mixBlendMode: 'overlay',
                pointerEvents: 'none'
            }} />

            {/* Content */}
            <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {children}
            </span>
        </motion.button>
    );
};

export default FantasyButton;
