import React from 'react';

const Hero = () => {
  const sectionStyle = {
    position: 'relative',
    height: '100vh',
    paddingTop: '80px',
    background: 'linear-gradient(to bottom right, #374151, #111827)',
    display: 'flex',
    alignItems: 'center'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  };

  const imageStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&h=1080&fit=crop')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    mixBlendMode: 'multiply'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1rem',
    color: 'white'
  };

  const titleStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 5rem)',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.1'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    marginBottom: '2rem',
    color: '#d1d5db'
  };

  return (
    <section id="accueil" style={sectionStyle}>
      <div style={overlayStyle}></div>
      <div style={imageStyle}></div>
      <div style={contentStyle}>
        <div style={{maxWidth: '42rem'}}>
          <h2 style={titleStyle}>
            NETTOYAGE<br />
            INDUSTRIEL DE<br />
            CONFIANCE
          </h2>
          <p style={subtitleStyle}>
            Créez un environnement de travail propre et sain adapté à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;