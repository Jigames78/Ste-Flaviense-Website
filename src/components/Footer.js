import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'white',
    padding: '3rem 1rem',
    borderTop: '1px solid #e5e7eb'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  };

  const topSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: '2rem'
  };

  const logoSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem'
  };

  const logoCircleStyle = {
    width: '48px',
    height: '48px',
    backgroundColor: '#f3f4f6',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const companyNameStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827'
  };

  const taglineStyle = {
    color: '#6b7280',
    fontSize: '0.875rem'
  };

  const linksGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem'
  };

  const linkColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  };

  const columnTitleStyle = {
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem',
    fontSize: '0.875rem',
    textTransform: 'uppercase'
  };

  const linkStyle = {
    color: '#374151',
    marginBottom: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer',
    fontSize: '0.875rem'
  };

  const contactInfoStyle = {
    color: '#374151',
    marginBottom: '0.5rem',
    fontSize: '0.875rem'
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '2rem 0'
  };

  const bottomSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    fontSize: '0.875rem',
    color: '#6b7280'
  };

  const socialLinksStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const socialIconStyle = {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    backgroundColor: '#0f766e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textDecoration: 'none',
    fontSize: '0.875rem',
    fontWeight: 'bold'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={topSectionStyle}>
            <div>
              <div style={logoSectionStyle}>
                <div style={logoCircleStyle}>
                  <img 
                    src="/logo.svg"
                    alt="Ste Flaviense Mayday Logo" 
                    style={{width: '40px', height: '40px', objectFit: 'contain'}}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/logo.png';
                    }}
                  />
                </div>
                <div>
                  <h3 style={companyNameStyle}>Ste Flavience Mayday</h3>
                  <p style={taglineStyle}>Services de Nettoyage</p>
                </div>
              </div>
            </div>

            <div style={linksGridStyle}>
              <div style={linkColumnStyle}>
                <h4 style={columnTitleStyle}>Navigation</h4>
                <Link 
                  to="/" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Accueil
                </Link>
                <Link 
                  to="/apropos" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  À propos
                </Link>
                <Link 
                  to="/equipements" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Équipements
                </Link>
                <Link 
                  to="/contact" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Contact
                </Link>
              </div>
              
              <div style={linkColumnStyle}>
                <h4 style={columnTitleStyle}>Réseaux Sociaux</h4>
                <a 
                  href="https://facebook.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Facebook
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Linkedin
                </a>
              </div>
              
              <div style={linkColumnStyle}>
                <h4 style={columnTitleStyle}>Contact</h4>
                <p style={contactInfoStyle}>01 42 29 70 45</p>
                <p style={contactInfoStyle}>info@Flaviense.fr</p>
                <p style={contactInfoStyle}>32 Rue Lantiez</p>
                <p style={contactInfoStyle}>75017 Paris</p>
              </div>
            </div>
          </div>

          <div style={dividerStyle}></div>

          <div style={bottomSectionStyle}>
            <p>© 2024 Ste Flaviense Mayday. Tous droits réservés.</p>
            
            <div style={socialLinksStyle}>
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#115e59'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0f766e'}
                aria-label="Facebook"
              >
                f
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#115e59'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0f766e'}
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                style={socialIconStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#115e59'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0f766e'}
                aria-label="Instagram"
              >
                ig
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;