import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-brand">
          <img src="/logo.png" alt="Logo" className="nav-logo-icon" />
          <span className="nav-title">DESERT DWARVES</span>
        </div>

        {/* Desktop Links */}
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Lore</NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Gallery</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>The Mines</NavLink>
          <NavLink to="/events" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Artifacts</NavLink>
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
            <input type="text" placeholder="Search the Archives" />
          </div>
          <a href="/shop" className="btn btn-primary nav-cta">JOIN THE CLAN</a>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Lore</NavLink>
          <NavLink to="/shop" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>The Mines</NavLink>
          <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>Artifacts</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
