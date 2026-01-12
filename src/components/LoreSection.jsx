import React from 'react';
import { BookOpen, Scale, Shield, Landmark } from 'lucide-react';

const LoreSection = () => {
    return (
        <section className="container" style={{ padding: '4rem 2rem', borderBottom: '1px solid #222' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Left Column: The First Forging */}
                <div style={{
                    background: '#111',
                    padding: '2.5rem',
                    border: '1px solid #333',
                    borderTop: '2px solid var(--primary)',
                    borderRadius: '4px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <BookOpen color="var(--primary)" size={24} />
                        <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', margin: 0 }}>The First Forging</h3>
                    </div>

                    <p style={{ color: '#aaa', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                        In the age before the sun scorched the sands, the Great Patriarch Alaric carved the first hall into the basalt heart of the Oasis Peak. It is said he didn't use a hammer, but sang the stone into submission. Today, those same halls echo with the rhythmic pulse of three thousand anvils.
                    </p>

                    <a href="#" style={{
                        color: 'var(--primary)',
                        fontWeight: '600',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Read The Scrolls &rarr;
                    </a>
                </div>

                {/* Right Column: Clan Governance */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Landmark color="var(--primary)" size={24} />
                        <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', margin: 0 }}>CLAN GOVERNANCE</h3>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        <Shield color="var(--primary)" size={20} style={{ marginTop: '4px' }} />
                        <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>COUNCIL OF EMBERS</h4>
                            <p style={{ color: '#777', fontSize: '0.9rem' }}>Twelve master smiths who decide the distribution of gold and ore.</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Scale color="var(--primary)" size={20} style={{ marginTop: '4px' }} />
                        <div>
                            <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>THE STONE LAW</h4>
                            <p style={{ color: '#777', fontSize: '0.9rem' }}>Ancient decrees etched in the foundation of the throne room.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LoreSection;
