import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';

const StoneFooter = () => {
    return (
        <footer style={{
            background: '#0a0a0a',
            borderTop: '1px solid #222',
            padding: '4rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '4rem'
                }}>

                    {/* Brand */}
                    <div>
                        <h4 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1.5rem' }}>DESERT DWARVES</h4>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Est. 1244 Fourth Age.<br />
                            Forging traditions into steel.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                            <a href="#" style={{ color: '#666' }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: '#666' }}><Instagram size={20} /></a>
                            <a href="#" style={{ color: '#666' }}><Facebook size={20} /></a>
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 style={{ color: '#f59e0b', fontSize: '1rem', marginBottom: '1.5rem' }}>MERCANTILE</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="/shop" style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>All Products</a></li>
                            <li><a href="/shop" style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Commissions</a></li>
                            <li><a href="/shop" style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Shipping</a></li>
                        </ul>
                    </div>

                    {/* Clan */}
                    <div>
                        <h4 style={{ color: '#f59e0b', fontSize: '1rem', marginBottom: '1.5rem' }}>THE CLAN</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="/about" style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Our History</a></li>
                            <li><a href="/events" style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Events</a></li>
                            <li><a href="#" style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>Join the Guild</a></li>
                        </ul>
                    </div>

                    {/* Newsletter (Simplified) */}
                    <div>
                        <h4 style={{ color: '#f59e0b', fontSize: '1rem', marginBottom: '1.5rem' }}>NEWSLETTER</h4>
                        <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <input type="email" placeholder="Email" style={{
                                background: 'transparent',
                                border: '1px solid #333',
                                padding: '0.5rem',
                                color: '#fff',
                                width: '100%'
                            }} />
                            <button style={{
                                background: '#f59e0b',
                                border: 'none',
                                padding: '0 1rem',
                                color: '#000',
                                fontWeight: 'bold'
                            }}>&rarr;</button>
                        </div>
                    </div>

                </div>

                <div style={{
                    marginTop: '4rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid #111',
                    textAlign: 'center',
                    color: '#444',
                    fontSize: '0.8rem'
                }}>
                    &copy; 2026 Desert Dwarves. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default StoneFooter;
