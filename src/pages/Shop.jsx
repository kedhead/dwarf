import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { Shield, Hammer, Gem } from 'lucide-react';

const Shop = () => {
    const navigate = useNavigate();
    const { products } = useProducts();

    const handleRequest = (product) => {
        navigate(`/shop/request/${product.id}`);
    };

    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '40vh',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(/armory.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'inset 0 -100px 100px #050505',
                marginBottom: '4rem'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h1 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '0' }}>
                        The <span>Mercantile</span>
                    </h1>
                    <p style={{ color: '#e5e5e5', fontSize: '1.2rem', marginTop: '1rem' }}>
                        Finest wares from the deep forges.
                    </p>
                </div>
            </section>

            <div className="container" style={{ padding: '0 2rem 4rem' }}>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {products.map(product => (
                        <div key={product.id} className="amber-card" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
                            {/* Image / Placeholder Area */}
                            <div style={{
                                height: '250px',
                                background: '#111',
                                position: 'relative',
                                overflow: 'hidden',
                                borderBottom: '1px solid rgba(245, 158, 11, 0.1)'
                            }}>
                                {product.image && !product.image.includes('placeholder') ? (
                                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>
                                        <Shield size={64} strokeWidth={1} />
                                    </div>
                                )}
                                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: '#0a0a0a', padding: '0.25rem 0.75rem', border: '1px solid #333', fontSize: '0.8rem', color: '#a3a3a3' }}>
                                    {product.category || 'Artifact'}
                                </div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>{product.name}</h3>
                                <p style={{ color: '#a3a3a3', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
                                    {product.description}
                                </p>

                                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontFamily: "'Cinzel', serif", color: '#f59e0b', fontSize: '1.2rem', fontWeight: 'bold' }}>
                                        {product.price === 'Commission' ? 'By Request' : product.price}
                                    </span>
                                    <button
                                        className="btn-amber"
                                        style={{ padding: '0.5rem 1.2rem', fontSize: '0.8rem' }}
                                        onClick={() => handleRequest(product)}
                                    >
                                        REQUEST
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {products.length === 0 && (
                    <div style={{ textAlign: 'center', color: '#666', marginTop: '4rem' }}>
                        <Hammer size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                        <p>The forges are currently cold. Check back soon for new artifacts.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
