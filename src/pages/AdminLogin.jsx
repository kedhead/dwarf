import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'dwarf1234') { // Simple hardcoded password for demo
            localStorage.setItem('isAdmin', 'true');
            navigate('/admin/dashboard');
        } else {
            alert('Wrong password! Try "dwarf1234"');
        }
    };

    return (
        <div className="container" style={{ padding: '4rem 2rem', maxWidth: '500px' }}>
            <h1 className="text-gradient" style={{ marginBottom: '2rem', textAlign: 'center' }}>Admin Access</h1>
            <form onSubmit={handleLogin} className="card">
                <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{
                            width: '100%', padding: '12px', borderRadius: '6px',
                            border: '1px solid var(--border)', background: 'var(--bg-dark)', color: 'white'
                        }}
                    />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Enter Forge
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
