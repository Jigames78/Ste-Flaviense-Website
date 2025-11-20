import React from 'react';
import { services } from '../assets/data';

const Services = () => {
// ... styles inchangés ...
// ...
  const buttonStyle = {
    backgroundColor: '#0f766e',
    color: 'white',
    padding: '0.75rem 2rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontWeight: '600',
    marginBottom: '3rem',
    transition: 'background-color 0.3s'
  };

  const gridStyle = {
// ... styles inchangés ...
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    height: '16rem',
    cursor: 'pointer'
  };

// ... autres styles inchangés ...

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
// ... contenu du header inchangé ...
        <button 
          style={buttonStyle}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#115e59'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#0f766e'}
        >
          Plus d'infos
        </button>

        <div style={gridStyle}>
          {services.map((service, index) => (
            <div 
              key={index} 
              style={cardStyle}
              // AJOUT DE LA CLASSE CSS. L'ancienne logique onMouseEnter/onMouseLeave a été retirée.
              className='card-hover-effect' 
            >
              <img 
                src={service.image} 
                alt={service.title}
                style={imageStyle}
              />
              <div style={overlayStyle}></div>
              <div style={cardContentStyle}>
                <h3 style={cardTitleStyle}>{service.title}</h3>
                <div style={cardLineStyle}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;