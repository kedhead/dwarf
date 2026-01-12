import React from 'react';

const HeroFrame = () => {
    return (
        <section style={{
            position: 'relative',
            padding: '4rem 2rem',
            background: 'linear-gradient(to bottom, #050505, #111)',
            minHeight: '700px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background Texture/Image (Simulation) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(20, 20, 25, 0.8) 0%, #050505 80%)',
                zIndex: 0
            }}></div>

            {/* Main Gold Frame Container */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '100%',
                maxWidth: '1200px',
                border: '2px solid var(--gold)',
                borderRadius: '8px',
                padding: '6rem 4rem',
                textAlign: 'center',
                boxShadow: '0 0 50px rgba(0,0,0,0.8), inset 0 0 100px rgba(0,0,0,0.9)',
                background: 'rgba(5, 5, 5, 0.6)'
            }}>
                {/* Decorative Corner Inlays (CSS Only) */}
                <div style={{ position: 'absolute', top: '4px', left: '4px', width: '20px', height: '20px', borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' }}></div>
                <div style={{ position: 'absolute', top: '4px', right: '4px', width: '20px', height: '20px', borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' }}></div>
                <div style={{ position: 'absolute', bottom: '4px', left: '4px', width: '20px', height: '20px', borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' }}></div>
                <div style={{ position: 'absolute', bottom: '4px', right: '4px', width: '20px', height: '20px', borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' }}></div>

                {/* Content */}
                <div style={{ marginBottom: '2rem' }}>
                    <img src="/logo.png" alt="Desert Dwarves Logo" style={{
                        maxWidth: '400px',
                        width: '100%',
                        height: 'auto',
                        filter: 'drop-shadow(0 0 30px rgba(255, 107, 0, 0.3))'
                    }} />
                </div>

                <h1 style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '4rem',
                    color: '#fff',
                    fontStyle: 'normal',
                    marginBottom: '1rem',
                    lineHeight: 1,
                    letterSpacing: '0.1em'
                }}>
                    DESERT DWARVES
                </h1>

                <h3 style={{
                    color: 'var(--gold)',
                    fontSize: '1.25rem',
                    letterSpacing: '0.2em',
                    marginBottom: '2rem',
                    opacity: 0.9,
                    fontFamily: 'Inter, sans-serif',
                    textTransform: 'uppercase'
                }}>
                    Forging The Deep Realms
                </h3>

                <div style={{
                    width: '100px',
                    height: '2px',
                    background: 'var(--primary)',
                    margin: '0 auto 2rem auto'
                }}></div>

                <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'italic',
                    color: '#aaa',
                    maxWidth: '600px',
                    margin: '0 auto 3rem auto',
                    fontSize: '1.2rem'
                }}>
                    "Where the stone remembers the first hammer strike and gold echoes the heartbeat of the mountain."
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <a href="/shop" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>ENTER MINES</a>
                    <a href="/about" className="btn btn-outline" style={{ padding: '1rem 3rem' }}>ANCIENT LORE</a>
                </div>
            </div>
        </section>
    );
};

export default HeroFrame;
