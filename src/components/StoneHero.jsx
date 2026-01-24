import React from 'react';
import { Hammer, Shield } from 'lucide-react';
import FantasyButton from './FantasyButton';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

const StoneHero = () => {
    const navigate = useNavigate();
    const { pageHeaders } = useContent();
    return (
        <section className="stone-hero" style={{
            textAlign: 'center',
            position: 'relative',
            // height set in css
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: '8rem', /* More space at bottom */
            /* Hero Image */
            backgroundImage: `url(${pageHeaders?.home?.image || '/heroheaderfull.png'})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: 'inset 0 -200px 150px #050505' /* Smooth fade to black */
        }}>
            <style>{`
                .stone-hero {
                    height: 90vh;
                    max-height: 1000px;
                    min-height: 700px;
                }
                @media (max-width: 768px) {
                    .stone-hero {
                        height: 60vh !important; /* Shorter on mobile */
                        min-height: 500px !important;
                        padding-bottom: 4rem !important; /* Less padding on mobile */
                    }
                }
            `}</style>

            {/* Overlay Gradient for Text Readability if needed (optional) */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(5,5,5,0.7) 0%, rgba(5,5,5,0.2) 50%, rgba(5,5,5,1) 100%)'
            }} />

            {/* Content Buffer */}
            <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                {/* Primary Actions */}
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <FantasyButton onClick={() => navigate('/shop')} variant="primary">
                        Browse The Armory
                    </FantasyButton>

                    <FantasyButton onClick={() => navigate('/about')} variant="outline">
                        Meet The Makers
                    </FantasyButton>
                </div>

            </div>

        </section>
    );
};

export default StoneHero;
