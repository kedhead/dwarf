import React from 'react';
import { Hammer, Shield, Flame } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{
            color: 'var(--forge-gold)',
            marginBottom: '1rem',
            display: 'inline-block',
            padding: '1rem',
            background: 'rgba(197, 160, 89, 0.1)',
            clipPath: 'circle(50%)'
        }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#fff' }}>{title}</h3>
        <p style={{ color: '#a0a0a0' }}>{description}</p>
    </div>
);

const DwarvenFeatures = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            position: 'relative',
            zIndex: 2
        }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        color: 'var(--forge-gold)',
                        marginBottom: '1rem'
                    }}>
                        The Dwarven Way
                    </h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#a0a0a0' }}>
                        We don't just sell props. We forge legends. Every item is crafted with the weight of tradition and the heat of the earth.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    <FeatureCard
                        icon={Hammer}
                        title="Master Craftsmanship"
                        description="Hand-forged detailing on every piece. No plastic-looking shortcuts. Only high-grade materials."
                    />
                    <FeatureCard
                        icon={Shield}
                        title="Battle Tested"
                        description="Our gear isn't just for show. It's built to withstand the rigors of the LARP battlefield."
                    />
                    <FeatureCard
                        icon={Flame}
                        title="Forged in Fire"
                        description="Custom designs brought to life. If you can dream it, the forges can shape it."
                    />
                </div>
            </div>
        </section>
    );
};

export default DwarvenFeatures;
