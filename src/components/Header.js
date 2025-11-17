import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
    transition: 'all 0.3s',
    backgroundColor: 'white',
    boxShadow: scrolled ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem'
  };

  const flexBetweenStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 0'
  };

  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    textDecoration: 'none'
  };

  const logoCircleStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#0f766e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#115e59'
  };

  const navStyle = {
    display: 'flex',
    gap: '2rem'
  };

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? '#0f766e' : '#1f2937',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s',
    borderBottom: location.pathname === path ? '2px solid #0f766e' : 'none',
    paddingBottom: '4px'
  });

  const menuButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer'
  };

  const mobileMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    paddingBottom: '1rem'
  };

  const mobileLinkStyle = {
    padding: '0.5rem 0',
    color: '#1f2937',
    textDecoration: 'none'
  };

  return (
    <header style={menuStyle}>
      <div style={containerStyle}>
        <div style={flexBetweenStyle}>
          <Link to="/" style={logoContainerStyle}>
            <div style={logoCircleStyle}>
              FM
            </div>
            <h1 style={titleStyle}>Ste Flaviense Mayday</h1>
          </Link>
          
          <nav style={{...navStyle, display: window.innerWidth < 768 ? 'none' : 'flex'}}>
            <Link to="/" style={getLinkStyle('/')}>Accueil</Link>
            <Link to="/apropos" style={getLinkStyle('/apropos')}>À propos</Link>
            <Link to="/equipements" style={getLinkStyle('/equipements')}>Équipements</Link>
            <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{...menuButtonStyle, display: window.innerWidth < 768 ? 'block' : 'none'}}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && (
          <nav style={mobileMenuStyle}>
            <Link to="/" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Accueil</Link>
            <Link to="/apropos" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>À propos</Link>
            <Link to="/equipements" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Équipements</Link>
            <Link to="/contact" style={mobileLinkStyle} onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;