import React from 'react';

const GuildEnrollment = () => {
    return (
        <section style={{
            background: 'linear-gradient(to right, #1a1b1e, #25262b)',
            borderTop: '2px solid var(--forge-gold)',
            borderBottom: '2px solid var(--forge-gold)',
            padding: '4rem 2rem',
            marginTop: '4rem',
            position: 'relative',
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{
                    color: 'var(--forge-gold)',
                    marginBottom: '1rem',
                    fontSize: '2.5rem'
                }}>
                    Join the Guild
                </h2>
                <p style={{
                    color: '#a0a0a0',
                    marginBottom: '2rem',
                    maxWidth: '600px',
                    margin: '0 auto 2rem auto'
                }}>
                    Subscribe to our missives. Be the first to know when the forges run hot and new artifacts are unearthed.
                </p>

                <form style={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    maxWidth: '500px',
                    margin: '0 auto'
                }} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address..."
                        style={{
                            flex: 1,
                            padding: '1rem',
                            background: '#111',
                            border: '1px solid #444',
                            color: 'white',
                            fontFamily: 'var(--font-body)',
                            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)'
                        }}
                    />
                    <button className="btn btn-primary">
                        Enroll Now
                    </button>
                </form>
            </div>
        </section>
    );
};

export default GuildEnrollment;
