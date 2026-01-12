import React from 'react';
import FantasyFrame from '../components/FantasyFrame';
import FantasyButton from '../components/FantasyButton';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const Events = () => {
    const { events } = useContent();

    return (
        <div className="events-page" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
            <div className="container">
                <h1 className="section-title">
                    Upcoming <span>Gatherings</span>
                </h1>

                <p style={{ textAlign: 'center', color: '#a3a3a3', maxWidth: '600px', margin: '-2rem auto 4rem' }}>
                    Where the clan meets to trade, celebrate, and showcase the finest works of the anvil.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                    {events.length === 0 ? (
                        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>No upcoming gatherings reported by the ravens.</p>
                    ) : (
                        events.map(event => (
                            <div key={event.id} style={{ position: 'relative' }}>
                                {/* Connecting Line (visual flair) */}
                                <div style={{
                                    position: 'absolute', left: '20px', top: '-2rem', bottom: '-2rem',
                                    width: '2px', background: '#333', zIndex: -1
                                }} />

                                <FantasyFrame hoverable>
                                    <div style={{
                                        display: 'flex',
                                        gap: '2rem',
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        flexWrap: 'wrap'
                                    }}>
                                        {/* Date Block */}
                                        <div style={{
                                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                                            background: '#1c1917', border: '1px solid #44403c', padding: '1rem',
                                            minWidth: '120px'
                                        }}>
                                            <Calendar size={24} color="#f59e0b" style={{ marginBottom: '0.5rem' }} />
                                            <span style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>
                                                {event.date.split(' ')[0]} {/* Roughly Month */}
                                            </span>
                                            <span style={{ color: '#a3a3a3', fontSize: '0.9rem' }}>
                                                {event.date.split(',')[1] || '2026'}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{event.title}</h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#f59e0b', marginBottom: '1rem', fontSize: '0.9rem' }}>
                                                <MapPin size={16} />
                                                <span>{event.location}</span>
                                            </div>
                                            <p style={{ color: '#a3a3a3', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                                {event.description}
                                            </p>

                                            {event.link && (
                                                <FantasyButton variant="outline" onClick={() => window.open(event.link, '_blank')}>
                                                    Get Directions <ExternalLink size={16} style={{ marginLeft: '0.5rem' }} />
                                                </FantasyButton>
                                            )}
                                        </div>
                                    </div>
                                </FantasyFrame>
                            </div>
                        ))
                    )}
                </div>

                {/* Newsletter / Notifications */}
                <div id="newsletter" style={{ marginTop: '6rem', textAlign: 'center' }}>
                    <FantasyFrame>
                        <div style={{ padding: '2rem', textAlign: 'center' }}>
                            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Never Miss a Gathering</h3>
                            <p style={{ color: '#a3a3a3', marginBottom: '1.5rem' }}>Join our raven-messenger list to be notified of secret sales and clan moots.</p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <input
                                    type="email"
                                    placeholder="Your email address..."
                                    style={{
                                        padding: '0.8rem 1rem',
                                        background: '#0a0a0a',
                                        border: '1px solid #44403c',
                                        color: '#fff',
                                        minWidth: '300px'
                                    }}
                                />
                                <FantasyButton variant="primary">Subscribe</FantasyButton>
                            </div>
                        </div>
                    </FantasyFrame>
                </div>

            </div>
        </div>
    );
};

export default Events;
