import React from 'react';
import { Gem, Hammer, Shield, Scroll } from 'lucide-react';
import FantasyFrame from './FantasyFrame';

const RunePanels = () => {
    return (
        <section className="container" style={{ margin: '6rem auto' }}>

            <h2 className="section-title">
                Forged In <span>Fire</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {/* Card 1: Commissions */}
                <FantasyFrame hoverable>
                    <div style={{ color: '#f59e0b', marginBottom: '1.5rem' }}>
                        <Scroll size={40} strokeWidth={1} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', fontFamily: "var(--font-header)" }}>Guild Commission</h3>
                    <p style={{ color: '#a3a3a3', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Submit your own designs. Our smiths will review your schematics and forge a custom artifact worthy of your lineage.
                    </p>
                    <a href="/shop/request/custom" style={{
                        color: '#f59e0b',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        START REQUEST &rarr;
                    </a>
                </FantasyFrame>

                {/* Card 2: Weaponry */}
                <FantasyFrame hoverable>
                    <div style={{ color: '#f59e0b', marginBottom: '1.5rem' }}>
                        <Hammer size={40} strokeWidth={1} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', fontFamily: "var(--font-header)" }}>Masterwork Weaponry</h3>
                    <p style={{ color: '#a3a3a3', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Blades of High Iron, Mithril-coated axes, and defensive plate. Browse our catalogue of ready-to-wield armaments.
                    </p>
                    <a href="/shop" style={{
                        color: '#f59e0b',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        BROWSE CATALOG &rarr;
                    </a>
                </FantasyFrame>

                {/* Card 3: Artifacts */}
                <FantasyFrame hoverable>
                    <div style={{ color: '#f59e0b', marginBottom: '1.5rem' }}>
                        <Scroll size={40} strokeWidth={1} />
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', fontFamily: "var(--font-header)" }}>Join The Clan</h3>
                    <p style={{ color: '#a3a3a3', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Subscribe to our raven-messenger service. Be the first to know of new artifacts and clan gatherings.
                    </p>
                    <a href="/events#newsletter" style={{
                        color: '#f59e0b',
                        fontWeight: '600',
                        letterSpacing: '0.05em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        JOIN THE CLAN &rarr;
                    </a>
                </FantasyFrame>

            </div>
        </section>
    );
};

export default RunePanels;
