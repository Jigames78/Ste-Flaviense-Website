import React from 'react';
import { equipment } from '../assets/data';

const Equipements = () => {
  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(1.875rem, 4vw, 2.5rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '3rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '5rem'
  };

  const cardImageStyle = {
    overflow: 'hidden',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    marginBottom: '1rem',
    height: '14rem'
  };

  const equipmentImageStyle = {
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
    color: '#374151',
    lineHeight: '1.5'
  };

  const details = [
    {
      title: "Fenêtres",
      text: "Nettoyage professionnel des vitres et surfaces vitrées avec des produits spécialisés pour un résultat impeccable.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="20" y="30" width="30" height="50" rx="2"/>
          <rect x="55" y="30" width="25" height="50" rx="2"/>
        </svg>
      )
    },
    {
      title: "Planchers",
      text: "Entretien et nettoyage de tous types de sols : carrelage, parquet, moquette avec des techniques adaptées.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,40 L70,40 M30,50 L70,50 M30,60 L70,60"/>
        </svg>
      )
    },
    {
      title: "Tapis",
      text: "Nettoyage en profondeur des tapis et moquettes pour éliminer les taches et les allergènes.",
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
      text: "Nettoyage délicat des tissus d'ameublement et rideaux avec des produits adaptés à chaque matière.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="30" y="35" width="40" height="40" rx="2"/>
          <path d="M35,40 L65,40 M35,50 L65,50 M35,60 L65,60"/>
        </svg>
      )
    }
  ];

  const suppliersSectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f3f4f6'
  };

  const suppliersGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '3rem'
  };

  const supplierCardStyle = {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px'
  };

  const supplierNameStyle = {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#111827'
  };

  const suppliers = [
    { name: "Cottrez", color: "#FF6347" },
    { name: "Ecolabel", color: "#228B22" },
    { name: "Eyrein Industrie", color: "#1E90FF" },
    { name: "Solier", color: "#00CED1" }
  ];

  return (
    <>
      <section style={{
        position: 'relative',
        height: '60vh',
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <img 
          src="/images/hero/hero-equipements.jpg"
          alt="Équipements de nettoyage"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
          loading="eager"
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          color: 'white'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 'bold',
            lineHeight: '1.1',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            MÉNAGE SUR MESURE<br />
            À VOTRE SERVICE
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            marginTop: '1rem',
            color: '#f3f4f6',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            Des équipements professionnels pour un nettoyage de qualité
          </p>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>LES MEILLEURS PRODUITS</h2>
          <div style={gridStyle}>
            {equipment.map((item, index) => (
              <div key={index}>
                <div 
                  style={cardImageStyle}
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
                    src={item.image}
                    alt={item.title}
                    style={equipmentImageStyle}
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

      <section style={suppliersSectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Nos Fournisseurs</h2>
          <p style={{fontSize: '1.125rem', color: '#374151', marginBottom: '2rem', textAlign: 'center'}}>
            Partagez les témoignages de vos clients. Cela peut renforcer votre image de marque.
          </p>
          
          <div style={suppliersGridStyle}>
            {suppliers.map((supplier, index) => (
              <div key={index} style={supplierCardStyle}>
                <p style={{...supplierNameStyle, color: supplier.color}}>{supplier.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Equipements;