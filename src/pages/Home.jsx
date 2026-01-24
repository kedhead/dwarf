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



            <div style={{ position: 'relative', zIndex: 2, marginTop: '-100px' }}>
                <RunePanels />
            </div>

            <StoneFooter />
        </div>
    );
};

export default Home;
