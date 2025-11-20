import React, { useState, useEffect } from 'react'; // AJOUT DES HOOKS

const Hero = () => {
  // AJOUT: Logique Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // FIN AJOUT

  const sectionStyle = {
    position: 'relative',
    height: '100vh',
    paddingTop: '80px',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  };

  const imageStyle = {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    // MODIFICATION POUR PARALLAX
    transform: `translateY(${offsetY * 0.4}px)`, 
    transition: 'transform 0.1s ease-out',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1
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
    lineHeight: '1.1',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
  };

  const subtitleStyle = {
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    marginBottom: '2rem',
    color: '#f3f4f6',
    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  };

  return (
    <section id="accueil" style={sectionStyle}>
      <img 
        src="/images/hero/hero-home.jpg"
        alt="Nettoyage industriel"
        style={imageStyle}
        loading="eager"
        onError={(e) => {
          console.error('Image non chargée:', e.target.src);
          e.target.style.display = 'none';
        }}
      />
      <div style={overlayStyle}></div>
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