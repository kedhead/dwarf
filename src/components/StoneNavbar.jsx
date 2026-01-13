import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const StoneNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkStyle = {
        fontFamily: "'Inter', sans-serif",
        color: '#a3a3a3',
        fontSize: '0.9rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
    };

    const activeStyle = {
        color: '#f59e0b'
    };

    return (
        <nav style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: '2rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {/* Brand */}
                <div style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#fff',
                    letterSpacing: '0.1em'
                }}>
                    DESERT DWARVES
                </div>

                {/* Desktop Links */}
                <div className="desktop-links" style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    <NavLink to="/" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Home</NavLink>
                    <NavLink to="/shop" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Mercantile</NavLink>
                    <NavLink to="/about" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>The Clan</NavLink>
                    <NavLink to="/events" style={({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle}>Gatherings</NavLink>


                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ color: '#fff', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    height: '100vh',
                    backgroundColor: 'rgba(5, 5, 5, 0.98)',
                    backdropFilter: 'blur(10px)',
                    zIndex: 999,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '4rem',
                    gap: '2rem'
                }}>
                    <NavLink to="/" onClick={() => setIsOpen(false)} style={linkStyle}>Home</NavLink>
                    <NavLink to="/shop" onClick={() => setIsOpen(false)} style={linkStyle}>Mercantile</NavLink>
                    <NavLink to="/about" onClick={() => setIsOpen(false)} style={linkStyle}>The Clan</NavLink>
                    <NavLink to="/events" onClick={() => setIsOpen(false)} style={linkStyle}>Gatherings</NavLink>
                    <NavLink to="/shop" onClick={() => setIsOpen(false)} style={{ ...linkStyle, color: '#f59e0b', border: '1px solid #f59e0b', padding: '1rem 2rem' }}>JOIN THE CLAN</NavLink>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-links { display: none !important; }
                    .mobile-toggle { display: block !important; }
                }
                @media (min-width: 769px) {
                    .mobile-toggle { display: none !important; }
                }
            `}</style>
        </nav>
    );
};

export default StoneNavbar;
