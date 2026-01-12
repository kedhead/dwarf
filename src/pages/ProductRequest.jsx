import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Phone, Mail } from 'lucide-react';
import { useProducts } from '../context/ProductsContext';
import { motion } from 'framer-motion';

const ProductRequest = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useProducts();
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '', lastName: '',
        email: '', phone: '',
        notes: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (id === 'custom') {
            setProduct({
                id: 'custom',
                name: 'Custom Guild Commission',
                category: 'Bespoke Forge Work',
                image: '', // Use default shield icon
                price: 'To be quoted'
            });
        } else {
            const found = products.find(p => p.id === parseInt(id));
            if (found) setProduct(found);
        }
    }, [id, products]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Mock API call
    };

    if (!product) return <div className="container" style={{ padding: '8rem 2rem', color: '#fff' }}>Loading Artifact...</div>;

    if (isSubmitted) {
        return (
            <div className="container" style={{ padding: '8rem 2rem', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <CheckCircle size={80} color="#f59e0b" style={{ marginBottom: '2rem' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontFamily: "'Cinzel', serif", color: '#fff' }}>Request Sealed</h2>
                    <p style={{ color: '#a3a3a3', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
                        Hail <strong>{formData.firstName}</strong>. We have received your commission for the <strong>{product.name}</strong>.
                        A Smith will contact you at <span style={{ color: '#f59e0b' }}>{formData.email}</span> shortly to discuss the forging process.
                    </p>
                    <button onClick={() => navigate('/shop')} className="btn-amber-outline">Return to Mercantile</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '8rem 2rem 4rem' }}>
            <button onClick={() => navigate('/shop')} style={{
                background: 'none', border: 'none', color: '#a3a3a3',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                marginBottom: '3rem', cursor: 'pointer', fontSize: '0.9rem'
            }}>
                <ArrowLeft size={18} /> Back to Shop
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                {/* Left Column: Form */}
                <div className="form-section">
                    <h2 style={{ marginBottom: '2rem', fontSize: '2rem', fontFamily: "'Cinzel', serif", color: '#fff' }}>Commission <span style={{ color: '#f59e0b' }}>Details</span></h2>

                    <form id="request-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label className="form-label">First Name</label>
                                <input required type="text" className="amber-input"
                                    value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                            </div>
                            <div style={{ flex: 1 }}>
                                <label className="form-label">Last Name</label>
                                <input required type="text" className="amber-input"
                                    value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                            </div>
                        </div>

                        <div>
                            <label className="form-label">Email Address</label>
                            <input required type="email" className="amber-input"
                                value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                        </div>

                        <div>
                            <label className="form-label">Contact Scroll (Phone)</label>
                            <input type="tel" className="amber-input"
                                value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                        </div>

                        <div>
                            <label className="form-label">Customization Notes</label>
                            <textarea className="amber-input" rows="6" placeholder="Describe any specific engravings, materials, or sizing requirements..."
                                value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })}></textarea>
                        </div>
                    </form>
                </div>

                {/* Right Column: Order Summary */}
                <div className="summary-section">
                    <div className="amber-card" style={{ position: 'sticky', top: '120px' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: '#fff', fontSize: '1.4rem' }}>Request Summary</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(245,158,11,0.2)' }}>
                            <div style={{ width: '80px', height: '80px', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {product.image && !product.image.includes('placeholder') ? (
                                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <Shield size={32} color="#333" />
                                )}
                            </div>
                            <div>
                                <div style={{ fontWeight: 'bold', color: '#fff', fontSize: '1.1rem' }}>{product.name}</div>
                                <div style={{ fontSize: '0.9rem', color: '#f59e0b' }}>{product.category}</div>
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem 0', color: '#a3a3a3', fontSize: '0.9rem', lineHeight: '1.6' }}>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <CheckCircle size={16} color="#f59e0b" />
                                <span>Direct consultation with Smith</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <CheckCircle size={16} color="#f59e0b" />
                                <span>Custom sizing included</span>
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckCircle size={16} color="#f59e0b" />
                                <span>Lifetime Durability Guarantee</span>
                            </div>
                        </div>

                        <div style={{ marginTop: '1.5rem' }}>
                            <button type="submit" form="request-form" className="btn-amber" style={{ width: '100%', justifyContent: 'center' }}>
                                SEND RAVEN
                            </button>
                            <p style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
                                No payment required at this stage.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                .form-label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #a3a3a3;
                    font-size: 0.9rem;
                    font-weight: 500;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                .amber-input {
                    width: 100%;
                    padding: 1rem;
                    background-color: #050505;
                    border: 1px solid #333;
                    border-radius: 0;
                    color: #fff;
                    font-family: 'Inter', sans-serif;
                    transition: all 0.3s ease;
                }
                .amber-input:focus {
                    outline: none;
                    border-color: #f59e0b;
                    box-shadow: 0 0 10px rgba(245, 158, 11, 0.1);
                }
            `}</style>
        </div>
    );
};

export default ProductRequest;
