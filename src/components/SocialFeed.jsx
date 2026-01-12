import React from 'react';
import { Instagram, Facebook, ExternalLink } from 'lucide-react';

const SocialFeed = () => {
    return (
        <section style={{ padding: '4rem 2rem', background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Follow The Forge</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>See our latest creations and behind-the-scenes action on social media.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {/* Mock Instagram Feed */}
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Instagram size={20} color="#E1306C" />
                                <span style={{ fontWeight: 'bold' }}>@desertdwarves</span>
                            </div>
                            <ExternalLink size={16} color="var(--text-muted)" />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
                            <div style={{ aspectRatio: '1/1', background: '#333' }}></div>
                            <div style={{ aspectRatio: '1/1', background: '#444' }}></div>
                            <div style={{ aspectRatio: '1/1', background: '#444' }}></div>
                            <div style={{ aspectRatio: '1/1', background: '#333' }}></div>
                        </div>
                        <div style={{ padding: '1rem', textAlign: 'center' }}>
                            <a href="https://instagram.com" target="_blank" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>View on Instagram</a>
                        </div>
                    </div>

                    {/* Mock Facebook Feed */}
                    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                        <div style={{ padding: '1rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Facebook size={20} color="#1877F2" />
                                <span style={{ fontWeight: 'bold' }}>Desert Dwarves</span>
                            </div>
                            <ExternalLink size={16} color="var(--text-muted)" />
                        </div>
                        <div style={{ padding: '2rem', height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', background: '#18191a' }}>
                            Latest Post Placeholder
                        </div>
                        <div style={{ padding: '1rem', textAlign: 'center' }}>
                            <a href="https://facebook.com" target="_blank" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>View on Facebook</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialFeed;
