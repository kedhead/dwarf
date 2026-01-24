import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import { useContent } from '../context/ContentContext';
import { Plus, Trash, LogOut, Package, Image as ImageIcon, Calendar, MapPin, Share2, Scroll } from 'lucide-react';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { products, addProduct, removeProduct } = useProducts();
    const {
        events, addEvent, removeEvent,
        clanSettings, updateClanSettings,
        clanPosts, addClanPost, removeClanPost,
        makers, addMaker, removeMaker,
        subscribers, newsletters, addNewsletter,
        pageHeaders, updatePageHeader
    } = useContent();
    const [activeTab, setActiveTab] = useState('products');
    const [selectedPage, setSelectedPage] = useState('home');

    // New Maker Form State
    const [newMaker, setNewMaker] = useState({
        name: '', role: '', bio: '', icon: 'hammer', image: ''
    });

    // New Newsletter Form State
    const [newNewsletter, setNewNewsletter] = useState({
        subject: '', content: ''
    });

    // New Product Form State
    const [newProduct, setNewProduct] = useState({
        name: '', description: '', price: 'Commission', category: 'Shields', image: ''
    });

    // New Event Form State
    const [newEvent, setNewEvent] = useState({
        title: '', date: '', location: '', description: '', link: ''
    });

    // Clan Settings Form State
    const [socialSettings, setSocialSettings] = useState({
        instagramEmbed: '', facebookEmbed: ''
    });

    // New Clan Post Form State
    const [newPost, setNewPost] = useState({
        title: '', content: '', image: '', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    });

    useEffect(() => {
        if (!localStorage.getItem('isAdmin')) {
            // navigate('/admin'); 
        }
        if (clanSettings) {
            setSocialSettings(clanSettings);
        }
    }, [navigate, clanSettings]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/');
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        addProduct(newProduct);
        alert('Artifact forged and added to the Mercantile!');
        setNewProduct({ name: '', description: '', price: 'Commission', category: 'Shields', image: '' });
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        addEvent(newEvent);
        alert('Gathering announced to the clan!');
        setNewEvent({ title: '', date: '', location: '', description: '', link: '' });
    };

    const handleUpdateSettings = (e) => {
        e.preventDefault();
        updateClanSettings(socialSettings);
        alert('Clan records updated!');
    };

    const handleAddPost = (e) => {
        e.preventDefault();
        addClanPost(newPost);
        alert('Tale added to the chronicles!');
        setNewPost({ title: '', content: '', image: '', date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) });
    };

    const handleAddMaker = (e) => {
        e.preventDefault();
        addMaker(newMaker);
        alert('New maker added to the roster!');
        setNewMaker({ name: '', role: '', bio: '', icon: 'hammer', image: '' });
    };

    const handleSendNewsletter = (e) => {
        e.preventDefault();
        addNewsletter(newNewsletter);
        alert(`Newsletter "${newNewsletter.subject}" sent to ${subscribers.length} subscribers!`);
        setNewNewsletter({ subject: '', content: '' });
    };

    return (
        <div className="container admin-dashboard-container" style={{ padding: '8rem 2rem 4rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h1 className="section-title" style={{ marginBottom: 0, textAlign: 'left' }}>Forge <span>Master</span></h1>
                <button onClick={handleLogout} className="btn-amber-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.5rem', fontSize: '0.8rem' }}>
                    <LogOut size={16} /> Logout
                </button>
            </div>

            {/* Navigation Tabs */}
            <div className="admin-tabs" style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', borderBottom: '1px solid #333' }}>
                <button
                    onClick={() => setActiveTab('products')}
                    style={{
                        background: 'none', border: 'none', padding: '1rem 2rem', cursor: 'pointer',
                        color: activeTab === 'products' ? '#f59e0b' : '#666',
                        borderBottom: activeTab === 'products' ? '2px solid #f59e0b' : 'none',
                        fontWeight: 'bold', fontSize: '1.1rem'
                    }}
                >
                    The Armory
                </button>
                <button
                    onClick={() => setActiveTab('events')}
                    style={{
                        background: 'none', border: 'none', padding: '1rem 2rem', cursor: 'pointer',
                        color: activeTab === 'events' ? '#f59e0b' : '#666',
                        borderBottom: activeTab === 'events' ? '2px solid #f59e0b' : 'none',
                        fontWeight: 'bold', fontSize: '1.1rem'
                    }}
                >
                    Gatherings
                </button>
                <button
                    onClick={() => setActiveTab('clan')}
                    style={{
                        background: 'none', border: 'none', padding: '1rem 2rem', cursor: 'pointer',
                        color: activeTab === 'clan' ? '#f59e0b' : '#666',
                        borderBottom: activeTab === 'clan' ? '2px solid #f59e0b' : 'none',
                        fontWeight: 'bold', fontSize: '1.1rem'
                    }}
                >
                    The Clan
                </button>
                <button
                    onClick={() => setActiveTab('newsletter')}
                    style={{
                        background: 'none', border: 'none', padding: '1rem 2rem', cursor: 'pointer',
                        color: activeTab === 'newsletter' ? '#f59e0b' : '#666',
                        borderBottom: activeTab === 'newsletter' ? '2px solid #f59e0b' : 'none',
                        fontWeight: 'bold', fontSize: '1.1rem'
                    }}
                >
                    Scribe's Quarters
                </button>
                <button
                    onClick={() => setActiveTab('content')}
                    style={{
                        background: 'none', border: 'none', padding: '1rem 2rem', cursor: 'pointer',
                        color: activeTab === 'content' ? '#f59e0b' : '#666',
                        borderBottom: activeTab === 'content' ? '2px solid #f59e0b' : 'none',
                        fontWeight: 'bold', fontSize: '1.1rem'
                    }}
                >
                    Site Content
                </button>
            </div>

            {/* TAB: PRODUCTS */}
            {activeTab === 'products' && (
                <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '3rem' }}>
                    {/* Add Product Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="amber-card">
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                                <Plus size={20} color="#f59e0b" /> Forge New Artifact
                            </h3>
                            <form onSubmit={handleAddProduct} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input placeholder="Artifact Name" required className="amber-input"
                                    value={newProduct.name} onChange={e => setNewProduct({ ...newProduct, name: e.target.value })} />
                                <textarea placeholder="Description / Lore" required className="amber-input" rows="3"
                                    value={newProduct.description} onChange={e => setNewProduct({ ...newProduct, description: e.target.value })} />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <input placeholder="Price (e.g. 500g)" className="amber-input"
                                        value={newProduct.price} onChange={e => setNewProduct({ ...newProduct, price: e.target.value })} />
                                    <select className="amber-input"
                                        value={newProduct.category} onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}>
                                        <option>Shields</option>
                                        <option>Weaponry</option>
                                        <option>Jewelry</option>
                                        <option>Masonry</option>
                                    </select>
                                </div>
                                <input placeholder="Image URL (http://...)" className="amber-input"
                                    value={newProduct.image} onChange={e => setNewProduct({ ...newProduct, image: e.target.value })} />
                                <button type="submit" className="btn-amber" style={{ marginTop: '1rem', justifyContent: 'center' }}>Add to Store</button>
                            </form>
                        </div>
                    </div>

                    {/* Product List */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Package size={20} color="#f59e0b" /> Current Inventory
                        </h3>
                        {products.length === 0 ? <p style={{ color: '#666', fontStyle: 'italic' }}>The inventory is empty.</p> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {products.map(p => (
                                    <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '1.5rem', border: '1px solid #222' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ width: '50px', height: '50px', background: '#111', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                {p.image ? <img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <ImageIcon size={20} color="#333" />}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 'bold', color: '#fff' }}>{p.name}</div>
                                                <div style={{ fontSize: '0.85rem', color: '#f59e0b' }}>{p.category} — {p.price}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => removeProduct(p.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}><Trash size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB: GATHERINGS */}
            {activeTab === 'events' && (
                <div className="admin-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '3rem' }}>
                    {/* Add Event Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="amber-card">
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                                <Calendar size={20} color="#f59e0b" /> Announce Gathering
                            </h3>
                            <form onSubmit={handleAddEvent} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <input placeholder="Event Title" required className="amber-input"
                                    value={newEvent.title} onChange={e => setNewEvent({ ...newEvent, title: e.target.value })} />
                                <input placeholder="Date (e.g. Oct 15, 2026)" required className="amber-input"
                                    value={newEvent.date} onChange={e => setNewEvent({ ...newEvent, date: e.target.value })} />
                                <input placeholder="Location" required className="amber-input"
                                    value={newEvent.location} onChange={e => setNewEvent({ ...newEvent, location: e.target.value })} />
                                <textarea placeholder="Event Details" required className="amber-input" rows="3"
                                    value={newEvent.description} onChange={e => setNewEvent({ ...newEvent, description: e.target.value })} />
                                <input placeholder="External Link (Optional)" className="amber-input"
                                    value={newEvent.link} onChange={e => setNewEvent({ ...newEvent, link: e.target.value })} />
                                <button type="submit" className="btn-amber" style={{ marginTop: '1rem', justifyContent: 'center' }}>Publish Event</button>
                            </form>
                        </div>
                    </div>

                    {/* Event List */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '2rem', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={20} color="#f59e0b" /> Scheduled Gatherings
                        </h3>
                        {events.length === 0 ? <p style={{ color: '#666', fontStyle: 'italic' }}>No gatherings scheduled.</p> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {events.map(e => (
                                    <div key={e.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '1.5rem', border: '1px solid #222' }}>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#fff' }}>{e.title}</div>
                                            <div style={{ fontSize: '0.85rem', color: '#f59e0b' }}>{e.date} @ {e.location}</div>
                                        </div>
                                        <button onClick={() => removeEvent(e.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}><Trash size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB: THE CLAN (Socials & Posts) */}
            {activeTab === 'clan' && (
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {/* Social Settings */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <Share2 size={20} color="#f59e0b" /> Social & Embeds
                        </h3>
                        {/* ... existing social form ... */}
                        <form onSubmit={handleUpdateSettings} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>Instagram Embed / Link</label>
                                <textarea
                                    className="amber-input" rows="4"
                                    placeholder="<iframe src='...' ...></iframe> or Profile Link"
                                    value={socialSettings.instagramEmbed}
                                    onChange={e => setSocialSettings({ ...socialSettings, instagramEmbed: e.target.value })}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>Facebook Embed / Link</label>
                                <textarea
                                    className="amber-input" rows="4"
                                    placeholder="<iframe src='...' ...></iframe> or Profile Link"
                                    value={socialSettings.facebookEmbed}
                                    onChange={e => setSocialSettings({ ...socialSettings, facebookEmbed: e.target.value })}
                                />
                            </div>
                            <button type="submit" className="btn-amber" style={{ justifyContent: 'center' }}>Save Settings</button>
                        </form>
                    </div>

                    {/* Clan Tales (Posts) */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <Plus size={20} color="#f59e0b" /> Scribe New Tale
                        </h3>
                        <form onSubmit={handleAddPost} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input placeholder="Tale Title" required className="amber-input"
                                value={newPost.title} onChange={e => setNewPost({ ...newPost, title: e.target.value })} />

                            <input placeholder="Image URL (Optional)" className="amber-input"
                                value={newPost.image} onChange={e => setNewPost({ ...newPost, image: e.target.value })} />

                            <textarea placeholder="The story goes..." required className="amber-input" rows="5"
                                value={newPost.content} onChange={e => setNewPost({ ...newPost, content: e.target.value })} />

                            <button type="submit" className="btn-amber" style={{ marginTop: '1rem', justifyContent: 'center' }}>Post Tale</button>
                        </form>
                    </div>

                    {/* Existing Tales List */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <Share2 size={20} color="#f59e0b" /> Existing Tales
                        </h3>
                        {clanPosts.length === 0 ? <p style={{ color: '#666', fontStyle: 'italic' }}>The chronicles are empty.</p> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {clanPosts.map(p => (
                                    <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: '#050505', padding: '1.5rem', border: '1px solid #222' }}>
                                        <div style={{ display: 'flex', gap: '1rem' }}>
                                            {p.image && (
                                                <div style={{ width: '60px', height: '60px', background: '#111', flexShrink: 0 }}>
                                                    <img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                            )}
                                            <div>
                                                <div style={{ fontWeight: 'bold', color: '#fff' }}>{p.title}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#666', marginBottom: '0.5rem' }}>{p.date}</div>
                                                <div style={{ fontSize: '0.9rem', color: '#a3a3a3', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                    {p.content}
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={() => removeClanPost(p.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}><Trash size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Makers Management */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <Plus size={20} color="#f59e0b" /> Manage Makers
                        </h3>
                        <form onSubmit={handleAddMaker} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input placeholder="Name" required className="amber-input"
                                value={newMaker.name} onChange={e => setNewMaker({ ...newMaker, name: e.target.value })} />

                            <input placeholder="Role (e.g. Master Smith)" required className="amber-input"
                                value={newMaker.role} onChange={e => setNewMaker({ ...newMaker, role: e.target.value })} />

                            <textarea placeholder="Bio" required className="amber-input" rows="3"
                                value={newMaker.bio} onChange={e => setNewMaker({ ...newMaker, bio: e.target.value })} />

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <select className="amber-input" style={{ flex: 1 }}
                                    value={newMaker.icon} onChange={e => setNewMaker({ ...newMaker, icon: e.target.value })}>
                                    <option value="hammer">Hammer Icon</option>
                                    <option value="users">Users Icon</option>
                                </select>
                            </div>

                            <input placeholder="Photo URL (Optional, overrides icon)" className="amber-input"
                                value={newMaker.image} onChange={e => setNewMaker({ ...newMaker, image: e.target.value })} />

                            <button type="submit" className="btn-amber" style={{ marginTop: '1rem', justifyContent: 'center' }}>Add Maker</button>
                        </form>

                        <h4 style={{ margin: '2rem 0 1rem', color: '#f59e0b', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Current Makers</h4>
                        {makers.length === 0 ? <p style={{ color: '#666', fontStyle: 'italic' }}>No makers listed.</p> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {makers.map(m => (
                                    <div key={m.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#050505', padding: '1rem', border: '1px solid #222' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                                {m.image ? <img src={m.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: '#666', fontSize: '0.8rem' }}>{m.icon}</span>}
                                            </div>
                                            <div>
                                                <div style={{ fontWeight: 'bold', color: '#fff' }}>{m.name}</div>
                                                <div style={{ fontSize: '0.8rem', color: '#666' }}>{m.role}</div>
                                            </div>
                                        </div>
                                        <button onClick={() => removeMaker(m.id)} style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}><Trash size={16} /></button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB: NEWSLETTER */}
            {activeTab === 'newsletter' && (
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    {/* Send Newsletter */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <Scroll size={20} color="#f59e0b" /> Compose Missive
                        </h3>
                        <div style={{ background: '#111', padding: '1rem', border: '1px solid #333', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <span style={{ color: '#aaa' }}>To:</span>
                            <span style={{ fontWeight: 'bold', color: '#f59e0b' }}>{subscribers.length} Subscribers</span>
                        </div>
                        <form onSubmit={handleSendNewsletter} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input placeholder="Subject Line" required className="amber-input"
                                value={newNewsletter.subject} onChange={e => setNewNewsletter({ ...newNewsletter, subject: e.target.value })} />

                            <textarea placeholder="Write your message to the clan..." required className="amber-input" rows="8"
                                value={newNewsletter.content} onChange={e => setNewNewsletter({ ...newNewsletter, content: e.target.value })} />

                            <button type="submit" className="btn-amber" style={{ marginTop: '1rem', justifyContent: 'center' }}>
                                Send to All Subscribers
                            </button>
                        </form>
                    </div>

                    {/* Past Newsletters */}
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <Share2 size={20} color="#f59e0b" /> Archives
                        </h3>
                        {newsletters.length === 0 ? <p style={{ color: '#666', fontStyle: 'italic' }}>No past newsletters found.</p> : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {newsletters.map(n => (
                                    <div key={n.id} style={{ background: '#050505', padding: '1.5rem', border: '1px solid #222' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                            <div style={{ fontWeight: 'bold', color: '#fff' }}>{n.subject}</div>
                                            <div style={{ fontSize: '0.8rem', color: '#666' }}>{n.date}</div>
                                        </div>
                                        <div style={{ fontSize: '0.9rem', color: '#a3a3a3', lineHeight: '1.5', whiteSpace: 'pre-wrap' }}>
                                            {n.content}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* TAB: SITE CONTENT */}
            {activeTab === 'content' && (
                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <div className="amber-card">
                        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#fff' }}>
                            <ImageIcon size={20} color="#f59e0b" /> Page Headers
                        </h3>

                        <div style={{ marginBottom: '2rem' }}>
                            <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>Select Page to Edit</label>
                            <select
                                className="amber-input"
                                value={selectedPage}
                                onChange={(e) => setSelectedPage(e.target.value)}
                            >
                                <option value="home">Home Page (Hero)</option>
                                <option value="shop">Shop (The Armory)</option>
                                <option value="about">About (Meet The Makers)</option>
                            </select>
                        </div>

                        {pageHeaders && pageHeaders[selectedPage] && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>Header Image URL</label>
                                    <input
                                        className="amber-input"
                                        value={pageHeaders[selectedPage].image || ''}
                                        onChange={(e) => updatePageHeader(selectedPage, { image: e.target.value })}
                                        placeholder="/path/to/image.png or http://..."
                                    />
                                    <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                                        Recommended: 1920x1080px or higher resolution.
                                    </p>
                                </div>

                                {/* Preview */}
                                <div>
                                    <label style={{ display: 'block', color: '#fff', marginBottom: '0.5rem' }}>Preview</label>
                                    <div style={{
                                        width: '100%',
                                        height: '200px',
                                        background: '#111',
                                        backgroundImage: `url(${pageHeaders[selectedPage].image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        border: '1px solid #333',
                                        borderRadius: '4px'
                                    }} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <style>{`
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

                @media (max-width: 768px) {
                    .admin-dashboard-container {
                        padding: 6rem 1rem 2rem !important;
                    }
                    .admin-tabs {
                        flex-wrap: wrap;
                        gap: 0.5rem;
                        margin-bottom: 2rem !important;
                    }
                    .admin-tabs button {
                        flex: 1 1 40%;
                        padding: 0.75rem 0.5rem !important;
                        font-size: 0.9rem !important;
                        text-align: center;
                    }
                    .admin-grid {
                        grid-template-columns: 1fr !important;
                        gap: 2rem !important;
                    }
                    h1.section-title {
                        font-size: 2rem !important;
                        text-align: center !important;
                    }
                    /* Ensure buttons stack if needed */
                    .btn-amber-outline {
                        width: 100%;
                        justify-content: center;
                        margin-top: 1rem;
                    }
                    /* Header adjustment */
                    .admin-dashboard-container > div:first-child {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 1rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
