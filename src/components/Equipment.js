import React from 'react';
import { equipment } from '../assets/data';

const Equipment = () => {
  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const headerStyle = {
    marginBottom: '4rem'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '1rem'
  };

  const subtitleStyle = {
    fontSize: '1.125rem',
    color: '#374151',
    maxWidth: '42rem'
  };

  const sectionTitleStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '2rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginBottom: '4rem'
  };

  const cardImageStyle = {
    overflow: 'hidden',
    borderRadius: '0.5rem',
    marginBottom: '1rem',
    height: '14rem'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s'
  };

  const cardTitleStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827'
  };

  const cardLineStyle = {
    width: '3rem',
    height: '4px',
    backgroundColor: '#0f766e',
    marginTop: '0.5rem'
  };

  const detailsBoxStyle = {
    background: 'linear-gradient(to bottom right, #d1fae5, #99f6e4)',
    padding: '4rem 2rem',
    borderRadius: '0.5rem'
  };

  const detailsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem'
  };

  const detailIconStyle = {
    width: '4rem',
    height: '4rem',
    marginBottom: '1rem',
    color: '#0f766e'
  };

  const detailTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.75rem'
  };

  const detailTextStyle = {
    fontSize: '0.875rem',
    color: '#374151'
  };

  const details = [
    {
      title: "Fenêtres",
      text: "Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="20" y="30" width="30" height="50" rx="2"/>
          <rect x="55" y="30" width="25" height="50" rx="2"/>
        </svg>
      )
    },
    {
      title: "Planchers",
      text: "Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,40 L70,40 M30,50 L70,50 M30,60 L70,60"/>
        </svg>
      )
    },
    {
      title: "Tapis",
      text: "Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,50 Q50,30 70,50" strokeLinecap="round"/>
          <line x1="30" y1="50" x2="30" y2="70"/>
          <line x1="70" y1="50" x2="70" y2="70"/>
        </svg>
      )
    },
    {
      title: "Tissus",
      text: "Paragraphe. Cliquez ici pour le modifier. Utilisez-le pour vous présenter à vos visiteurs.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="30" y="35" width="40" height="40" rx="2"/>
          <path d="M35,40 L65,40 M35,50 L65,50 M35,60 L65,60"/>
        </svg>
      )
    }
  ];

  return (
    <section id="equipements" style={sectionStyle}>
      <div style={containerStyle}>
        <div style={headerStyle}>
          <h2 style={titleStyle}>
            MÉNAGE SUR MESURE<br />
            À VOTRE SERVICE
          </h2>
          <p style={subtitleStyle}>
            Paragraphe. Vous pouvez le modifier et ajouter votre texte. Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter votre contenu et personnaliser la police.
          </p>
        </div>

        <h3 style={sectionTitleStyle}>LES MEILLEURS PRODUITS</h3>
        <div style={gridStyle}>
          {equipment.map((item, index) => (
            <div key={index}>
              <div 
                style={cardImageStyle}
                // Suppression de l'ancienne logique de survol JS
                className='card-hover-effect' // AJOUT DE LA CLASSE CSS
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  style={imageStyle}
                />
              </div>
              <h4 style={cardTitleStyle}>{item.title}</h4>
              <div style={cardLineStyle}></div>
            </div>
          ))}
        </div>

        <div style={detailsBoxStyle}>
          <h3 style={{...sectionTitleStyle, marginBottom: '3rem'}}>SOIN APPORTÉ AUX DÉTAILS</h3>
          
          <div style={detailsGridStyle}>
            {details.map((detail, index) => (
              <div key={index}>
                <div style={detailIconStyle}>
                  {detail.icon}
                </div>
                <h4 style={detailTitleStyle}>{detail.title}</h4>
                  <p style={detailTextStyle}>{detail.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;