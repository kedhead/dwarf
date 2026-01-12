import React from 'react';
import OrnamentalBorders from '../components/OrnamentalBorders';
import FloatingRunes from '../components/FloatingRunes';
import StoneHero from '../components/StoneHero';
import RunePanels from '../components/RunePanels';
import StoneFooter from '../components/StoneFooter';

const Home = () => {
    return (
        <div className="home-page" style={{ position: 'relative' }}>
            <OrnamentalBorders />
            <FloatingRunes />

            <StoneHero />

            {/* Mine Descent Transition */}
            <div style={{
                width: '100%',
                height: '500px',
                marginTop: '-150px', // Pull up into Hero's bottom fade
                position: 'relative',
                zIndex: 1,
                backgroundImage: 'url(/subheader.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                // Fade out at bottom to blend with content
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                pointerEvents: 'none'
            }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5,5,5,1) 0%, rgba(5,5,5,0.4) 30%, rgba(5,5,5,0) 100%)' }} />
            </div>

            <div style={{ position: 'relative', zIndex: 2, marginTop: '-100px' }}>
                <RunePanels />
            </div>

            <StoneFooter />
        </div>
    );
};

export default Home;
