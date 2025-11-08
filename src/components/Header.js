import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    gap: '0.75rem'
  };

  const logoCircleStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#e5e7eb',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const logoTextStyle = {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#115e59'
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

  const linkStyle = {
    color: '#1f2937',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'color 0.3s'
  };

  const activeLinkStyle = {
    ...linkStyle,
    color: '#0f766e',
    borderBottom: '2px solid #0f766e',
    paddingBottom: '4px'
  };

  const menuButtonStyle = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'none'
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
          <div style={logoContainerStyle}>
            <div style={logoCircleStyle}>
              <span style={logoTextStyle}>Logo</span>
            </div>
            <h1 style={titleStyle}>Ste Flaviense Mayday</h1>
          </div>
          
          <nav style={{...navStyle, display: window.innerWidth < 768 ? 'none' : 'flex'}}>
            <a href="#accueil" style={linkStyle}>Accueil</a>
            <a href="#apropos" style={linkStyle}>À propos</a>
            <a href="#equipements" style={activeLinkStyle}>Équipements</a>
            <a href="#contact" style={linkStyle}>Contact</a>
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            style={{...menuButtonStyle, display: window.innerWidth < 768 ? 'block' : 'none'}}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {isMenuOpen && window.innerWidth < 768 && (
          <nav style={mobileMenuStyle}>
            <a href="#accueil" style={mobileLinkStyle}>Accueil</a>
            <a href="#apropos" style={mobileLinkStyle}>À propos</a>
            <a href="#equipements" style={mobileLinkStyle}>Équipements</a>
            <a href="#contact" style={mobileLinkStyle}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;