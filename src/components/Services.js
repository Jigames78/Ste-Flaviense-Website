import React from 'react';
import { services } from '../assets/data';

const Services = () => {
  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f9fafb'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem'
  };

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
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem'
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    height: '16rem',
    cursor: 'pointer'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)'
  };

  const cardContentStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '1.5rem'
  };

  const cardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'white'
  };

  const cardLineStyle = {
    width: '4rem',
    height: '4px',
    backgroundColor: '#14b8a6',
    marginTop: '0.5rem'
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          NOUS TRAVAILLONS SUR<br />
          TOUS TYPES DE LOCAUX
        </h2>
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
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
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