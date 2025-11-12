import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    objet: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulaire soumis ! Merci de nous avoir contacté.');
    console.log('Form data:', formData);
    // Ici vous ajouterez la logique d'envoi
  };

  const heroStyle = {
    position: 'relative',
    height: '60vh',
    paddingTop: '80px',
    background: 'linear-gradient(to bottom right, #1f2937, #111827)',
    display: 'flex',
    alignItems: 'center'
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  };

  const imageStyle = {
    position: 'absolute',
    inset: 0,
    backgroundImage: "url('https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1920&h=1080&fit=crop')",
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
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    fontWeight: 'bold',
    lineHeight: '1.1'
  };

  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#111827',
    color: 'white'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
    marginBottom: '4rem'
  };

  const contactImageStyle = {
    borderRadius: '0.5rem',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '24rem',
    objectFit: 'cover'
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    marginBottom: '1rem'
  };

  const consultationBoxStyle = {
    backgroundColor: '#1f2937',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    marginBottom: '1.5rem'
  };

  const consultationTextStyle = {
    fontSize: '1.25rem',
    marginBottom: '1rem'
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#111827',
    padding: '0.5rem 1.5rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const formContainerStyle = {
    backgroundColor: 'white',
    color: '#111827',
    padding: '3rem',
    borderRadius: '0.5rem'
  };

  const formTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '2rem'
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const inputRowStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem'
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem 1rem',
    border: 'none',
    borderBottom: '2px solid #d1d5db',
    outline: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    transition: 'border-color 0.3s'
  };

  const textareaStyle = {
    ...inputStyle,
    resize: 'vertical',
    minHeight: '120px'
  };

  const submitButtonStyle = {
    backgroundColor: '#0f766e',
    color: 'white',
    padding: '0.75rem 3rem',
    borderRadius: '0.375rem',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
    alignSelf: 'flex-start'
  };

  const infoSectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f9fafb'
  };

  const infoGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '3rem',
    marginTop: '3rem'
  };

  const infoCardStyle = {
    textAlign: 'center'
  };

  const infoIconStyle = {
    width: '3rem',
    height: '3rem',
    margin: '0 auto 1rem',
    color: '#0f766e'
  };

  const infoTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.5rem'
  };

  const infoTextStyle = {
    fontSize: '1rem',
    color: '#374151'
  };

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={overlayStyle}></div>
        <div style={imageStyle}></div>
        <div style={contentStyle}>
          <h1 style={titleStyle}>
            CONTACTEZ-NOUS POUR<br />
            PLUS D'INFOS
          </h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&h=600&fit=crop"
                alt="Contact"
                style={contactImageStyle}
              />
            </div>

            <div>
              <h2 style={sectionTitleStyle}>
                Prenez rendez-vous
              </h2>
              <div style={consultationBoxStyle}>
                <p style={consultationTextStyle}>Première consultation</p>
                <button 
                  style={buttonStyle}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                >
                  Réserver
                </button>
              </div>
            </div>
          </div>

          <div style={formContainerStyle}>
            <h3 style={formTitleStyle}>
              RECEVEZ VOTRE<br />
              DEVIS GRATUIT !
            </h3>
            
            <form onSubmit={handleSubmit} style={formStyle}>
              <div style={inputRowStyle}>
                <input 
                  type="text" 
                  name="prenom"
                  placeholder="Prénom" 
                  value={formData.prenom}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
                <input 
                  type="text"
                  name="nom" 
                  placeholder="Nom de famille" 
                  value={formData.nom}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <div style={inputRowStyle}>
                <input 
                  type="email"
                  name="email" 
                  placeholder="E-mail *" 
                  value={formData.email}
                  onChange={handleChange}
                  style={inputStyle}
                  required
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
                <input 
                  type="text"
                  name="objet" 
                  placeholder="Objet" 
                  value={formData.objet}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                  onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
                />
              </div>
              <textarea 
                name="message"
                placeholder="Laissez-nous un message..." 
                value={formData.message}
                onChange={handleChange}
                style={textareaStyle}
                onFocus={(e) => e.target.style.borderColor = '#0f766e'}
                onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
              ></textarea>
              <button 
                type="submit"
                style={submitButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#115e59'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#0f766e'}
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section style={infoSectionStyle}>
        <div style={containerStyle}>
          <h2 style={{...sectionTitleStyle, color: '#111827', textAlign: 'center'}}>
            Nos Coordonnées
          </h2>

          <div style={infoGridStyle}>
            <div style={infoCardStyle}>
              <div style={infoIconStyle}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="50" cy="40" r="15"/>
                  <path d="M30,80 Q30,60 50,60 Q70,60 70,80" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 style={infoTitleStyle}>Adresse</h3>
              <p style={infoTextStyle}>
                Paris, Île-de-France<br />
                France</p>
            </div>

            <div style={infoCardStyle}>
              <div style={infoIconStyle}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M30,30 L40,20 L60,40 L50,50 L70,70 L80,60 L70,50 L90,30" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={infoTitleStyle}>Téléphone</h3>
              <p style={infoTextStyle}>
                01 42 29 70 45
              </p>
            </div>

            <div style={infoCardStyle}>
              <div style={infoIconStyle}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="20" y="30" width="60" height="40" rx="5"/>
                  <path d="M20,30 L50,55 L80,30" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={infoTitleStyle}>Email</h3>
              <p style={infoTextStyle}>
                info@Flaviense.fr
              </p>
            </div>

            <div style={infoCardStyle}>
              <div style={infoIconStyle}>
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="50" cy="50" r="30"/>
                  <line x1="50" y1="35" x2="50" y2="50"/>
                  <line x1="50" y1="50" x2="65" y2="50"/>
                </svg>
              </div>
              <h3 style={infoTitleStyle}>Horaires</h3>
              <p style={infoTextStyle}>
                Lundi - Vendredi<br />
                8h00 - 18h00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section style={{padding: '0', height: '450px', backgroundColor: '#e5e7eb'}}>
        <iframe
          title="32 Rue Lantiez, 75017 Paris"
          src="https://maps.google.com/maps?q=32%20Rue%20Lantiez%2C%2075017%20Paris&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{border: 0}}
          allowFullScreen=""
          loading="lazy"
        />
      </section>
    </>
  );
};

export default Contact;