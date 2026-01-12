import React from 'react';
import { Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: '#0f0f10',
            borderTop: '1px solid var(--border-stone)',
            padding: '3rem 2rem',
            color: '#888',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10
        }}>
            <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem',
                    marginBottom: '3rem',
                    textAlign: 'left'
                }}>
                    <div style={{ flex: '1 1 250px' }}>
                        <h4 style={{ color: 'var(--forge-gold)', marginBottom: '1rem' }}>Desert Dwarves</h4>
                        <p style={{ fontSize: '0.9rem' }}>
                            Forging the finest armaments for the wasteland warrior since 2024.
                            Built to last. Built to conquer.
                        </p>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Navigation</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/" style={{ color: '#888' }}>Home</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/shop" style={{ color: '#888' }}>The Armory</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/about" style={{ color: '#888' }}>About Us</a></li>
                            <li style={{ marginBottom: '0.5rem' }}><a href="/events" style={{ color: '#888' }}>Events</a></li>
                        </ul>
                    </div>

                    <div style={{ flex: '1 1 150px' }}>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="#" style={{ color: 'var(--forge-gold)' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: 'var(--forge-gold)' }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: 'var(--forge-gold)' }}><Facebook size={20} /></a>
                            <a href="#" style={{ color: 'var(--forge-gold)' }}><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #222',
                    paddingTop: '2rem',
                    fontSize: '0.8rem'
                }}>
                    &copy; {new Date().getFullYear()} Desert Dwarves Forge. All rights reserved. <br />
                    <span style={{ opacity: 0.5 }}>Not officially affiliated with any mountain kingdoms.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
