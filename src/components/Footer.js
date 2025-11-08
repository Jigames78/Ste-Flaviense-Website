import React from 'react';

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

  const linkStyle = {
    color: '#374151',
    marginBottom: '0.5rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
    cursor: 'pointer'
  };

  const contactInfoStyle = {
    color: '#374151',
    marginBottom: '0.5rem'
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '2rem 0'
  };

  const bottomSectionStyle = {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '0.875rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={topSectionStyle}>
            <div>
              <div style={logoSectionStyle}>
                <div style={logoCircleStyle}>
                  <span style={logoTextStyle}>Logo</span>
                </div>
                <div>
                  <h3 style={companyNameStyle}>Ste Flavience Mayday</h3>
                  <p style={taglineStyle}>Services de Nettoyage</p>
                </div>
              </div>
            </div>

            <div style={linksGridStyle}>
              <div style={linkColumnStyle}>
                <a 
                  href="#accueil" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Accueil
                </a>
                <a 
                  href="#apropos" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  À propos
                </a>
                <a 
                  href="#equipements" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Équipements
                </a>
                <a 
                  href="#contact" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Contact
                </a>
              </div>
              
              <div style={linkColumnStyle}>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  style={linkStyle}
                  onMouseEnter={(e) => e.target.style.color = '#0f766e'}
                  onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                  Linkedin
                </a>
              </div>
              
              <div style={linkColumnStyle}>
                <p style={contactInfoStyle}>01 42 29 70 45</p>
                <p style={contactInfoStyle}>info@Flaviense.fr</p>
              </div>
            </div>
          </div>

          <div style={dividerStyle}></div>

          <div style={bottomSectionStyle}>
            <p>© 2024 Ste Flaviense Mayday. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;