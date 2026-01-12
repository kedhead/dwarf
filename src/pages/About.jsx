import React, { useState } from 'react';
import FantasyFrame from '../components/FantasyFrame';
import FantasyButton from '../components/FantasyButton';
import StoneHero from '../components/StoneHero';
import { Users, Hammer, Scroll } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContent } from '../context/ContentContext';


const NewsletterForm = () => {
    const { addSubscriber } = useContent();
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            addSubscriber(email);
            setStatus('success');
            setEmail('');
        }
    };

    if (status === 'success') {
        return (
            <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s ease' }}>
                <p style={{ color: '#f59e0b', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Welcome to the ranks, kin.</p>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>The ravens will find you when the forge is lit.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <input
                type="email"
                placeholder="Enter your email..."
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                    padding: '0.75rem 1rem',
                    background: '#0a0a0a',
                    border: '1px solid #44403c',
                    color: '#fff',
                    minWidth: '250px',
                    fontFamily: 'inherit'
                }}
            />
            <FantasyButton type="submit">Join the Clan</FantasyButton>
        </form>
    );
};

const About = () => {
    const navigate = useNavigate();
    const { clanSettings, clanPosts, makers } = useContent();

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '60vh',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(/dwarfhero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0 -150px 100px #050505'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.6)'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                        The <span>Clan</span>
                    </h1>
                    <p style={{ color: '#e5e5e5', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Forged in fire, tempered by time. We are the keepers of the old ways.
                    </p>
                </div>
            </section>

            {/* Tales from the Hold (Clan Posts) */}
            {clanPosts && clanPosts.length > 0 && (
                <section className="container" style={{ margin: '4rem auto' }}>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
                        Tales from the <span>Hold</span>
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '1000px', margin: '0 auto' }}>
                        {clanPosts.map((post, index) => (
                            <FantasyFrame key={post.id} hoverable>
                                <div style={{
                                    padding: '2rem',
                                    display: 'flex',
                                    flexDirection: window.innerWidth > 768 ? (index % 2 === 0 ? 'row' : 'row-reverse') : 'column',
                                    gap: '2rem',
                                    alignItems: 'center'
                                }}>
                                    {/* Image (if exists) */}
                                    {post.image && (
                                        <div style={{ flex: '0 0 300px', width: '100%' }}>
                                            <div style={{
                                                width: '100%',
                                                height: '250px',
                                                border: '1px solid #44403c',
                                                overflow: 'hidden',
                                                background: '#0a0a0a'
                                            }}>
                                                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                        </div>
                                    )}

                                    {/* Content */}
                                    <div style={{ flex: 1, textAlign: 'left' }}>
                                        <div style={{ color: '#f59e0b', fontSize: '0.9rem', marginBottom: '0.5rem', fontFamily: 'var(--font-header)' }}>
                                            {post.date}
                                        </div>
                                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{post.title}</h3>
                                        <div style={{ color: '#a3a3a3', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                                            {post.content}
                                        </div>
                                    </div>
                                </div>
                            </FantasyFrame>
                        ))}
                    </div>
                </section>
            )}

            {/* Lore & Craftsmanship Section */}
            <section className="container" style={{ margin: '4rem auto', display: 'flex', flexDirection: 'column', gap: '4rem' }}>

                {/* Our Origins */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>

                    <FantasyFrame>
                        <div style={{ padding: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-header)', color: '#f59e0b', marginBottom: '1rem' }}>
                                <Scroll size={24} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle' }} />
                                Our Origins
                            </h2>
                            <p style={{ color: '#a3a3a3', lineHeight: '1.8' }}>
                                The Desert Dwarves were not always of the sand. Once, we dwelt beneath the frost-capped peaks of the North.
                                But when the Great Rift tore the world asunder, our ancestors traveled south, finding refuge in the
                                Scorched Iron Mountains. Here, we discovered new metals, star-fallen gems, and a fire that burns hotter than any forge.
                            </p>
                        </div>
                    </FantasyFrame>

                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            width: '100%',
                            height: '300px',
                            background: '#1c1917',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #44403c',
                            position: 'relative'
                        }}>
                            {/* Placeholder for an image */}
                            <span style={{ color: '#44403c', fontStyle: 'italic' }}>[Archive Image: The First Forge]</span>
                            {/* Texture overlay */}
                            <div style={{
                                position: 'absolute', inset: 0, opacity: 0.1,
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
                            }} />
                        </div>
                    </div>
                </div>

                {/* Social Media Embeds (If Present) */}
                {(clanSettings.instagramEmbed || clanSettings.facebookEmbed) && (
                    <div style={{ padding: '2rem 0' }}>
                        <h2 className="section-title" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
                            Clan <span>Chronicles</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {clanSettings.instagramEmbed && (
                                <FantasyFrame>
                                    <div style={{ padding: '1rem', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                        <div
                                            style={{ width: '100%' }}
                                            dangerouslySetInnerHTML={{ __html: clanSettings.instagramEmbed }}
                                        />
                                    </div>
                                </FantasyFrame>
                            )}
                            {clanSettings.facebookEmbed && (
                                <FantasyFrame>
                                    <div style={{ padding: '1rem', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                        <div
                                            style={{ width: '100%' }}
                                            dangerouslySetInnerHTML={{ __html: clanSettings.facebookEmbed }}
                                        />
                                    </div>
                                </FantasyFrame>
                            )}
                        </div>
                    </div>
                )}

                {/* Meet the Makers */}
                <div>
                    <h2 className="section-title" style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem' }}>
                        Meet The <span>Makers</span>
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {makers && makers.map(maker => (
                            <FantasyFrame key={maker.id} hoverable>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{
                                        width: '120px', height: '120px', borderRadius: '50%',
                                        background: '#262626', margin: '0 auto 1.5rem',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        border: '2px solid #f59e0b',
                                        overflow: 'hidden'
                                    }}>
                                        {maker.image ? (
                                            <img src={maker.image} alt={maker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        ) : (
                                            maker.icon === 'users' ? <Users size={40} color="#525252" /> : <Hammer size={40} color="#525252" />
                                        )}
                                    </div>
                                    <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{maker.name}</h3>
                                    <p style={{ color: '#f59e0b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>{maker.role}</p>
                                    <p style={{ color: '#a3a3a3', fontSize: '0.95rem' }}>
                                        {maker.bio}
                                    </p>
                                </div>
                            </FantasyFrame>
                        ))}
                    </div>

                    {/* Call to Action - Newsletter Signup */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 0' }}>
                        <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Wish to join the ranks?</h3>
                        <p style={{ color: '#a3a3a3', marginBottom: '1.5rem' }}>Subscribe to our missives to be the first to know of new forges.</p>
                        <NewsletterForm />
                    </div>
                </div>

            </section>
        </div>
    );
};

export default About;
