import React from 'react';
import { Link } from 'react-router-dom';
import { services, testimonials, clients } from '../assets/data';

const Accueil = () => {
  const aboutSectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'hidden'
  };

  const containerStyle = {
    maxWidth: '1152px',
    margin: '0 auto'
  };

  const textStyle = {
    fontSize: '1.125rem',
    color: '#374151',
    marginBottom: '1.5rem',
    lineHeight: '1.75'
  };

  const statsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '4rem'
  };

  const statStyle = {
    textAlign: 'center'
  };

  const statNumberStyle = {
    fontSize: 'clamp(3rem, 6vw, 4rem)',
    fontWeight: 'bold',
    color: '#0f766e',
    marginBottom: '0.5rem'
  };

  const statLabelStyle = {
    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
    color: '#4b5563',
    fontWeight: '500'
  };

  const statLineStyle = {
    width: '6rem',
    height: '4px',
    backgroundColor: '#0f766e',
    margin: '1rem auto 0'
  };

  const servicesSectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f9fafb'
  };

  const sectionTitleStyle = {
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
    transition: 'background-color 0.3s',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
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

  const serviceImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s'
  };

  const cardOverlayStyle = {
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

  const commitmentsSectionStyle = {
    padding: '5rem 1rem',
    background: 'linear-gradient(to bottom right, #d1fae5, #99f6e4)'
  };

  const commitmentsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  };

  const commitmentCardStyle = {
    textAlign: 'center'
  };

  const iconContainerStyle = {
    width: '4rem',
    height: '4rem',
    margin: '0 auto 1rem',
    color: '#0f766e'
  };

  const commitmentTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.75rem'
  };

  const commitmentTextStyle = {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5'
  };

  const testimonialsSectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white'
  };

  const testimonialsContainerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const lineStyle = {
    width: '4rem',
    height: '4px',
    backgroundColor: '#0f766e',
    margin: '0 auto 2rem'
  };

  const quoteStyle = {
    fontSize: '1.25rem',
    color: '#374151',
    fontStyle: 'italic',
    marginBottom: '1.5rem',
    lineHeight: '1.75'
  };

  const authorStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827'
  };

  const clientsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '4rem'
  };

  const clientCardStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  const clientNameStyle = {
    fontWeight: 'bold',
    color: '#111827'
  };

  const stats = [
    { number: '30', label: 'Années de confiance' },
    { number: '400', label: 'Clients satisfaits' },
    { number: '35', label: 'Équipiers' },
    { number: '600', label: 'Locaux propres' }
  ];

  const commitments = [
    {
      title: "Qualités de service",
      text: "Nous garantissons des interventions rigoureuses, planifiées avec soin et régulièrement contrôlées.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,50 L40,60 L70,30" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="50" r="35"/>
        </svg>
      )
    },
    {
      title: "Proximité & réactivité",
      text: "Notre équipe reste disponible pour intervenir rapidement et efficacement.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="30" y="35" width="40" height="35" rx="2"/>
          <path d="M35,35 L35,30 Q35,25 40,25 L60,25 Q65,25 65,30 L65,35"/>
        </svg>
      )
    },
    {
      title: "Responsabilité sociale",
      text: "Nous investissons dans la formation continue de nos agents.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="40" r="12"/>
          <path d="M35,80 Q35,65 50,65 Q65,65 65,80" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Hygiène et sécurité",
      text: "Nous utilisons uniquement des produits certifiés écoresponsables.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M40,60 L50,70 L60,60" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="50" r="25"/>
        </svg>
      )
    }
  ];

  return (
    <>
      <section style={{
        position: 'relative',
        height: '100vh',
        paddingTop: '80px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <img 
          src={"/images/hero/hero-home.jpg"}
          alt="Nettoyage industriel"
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
          <div style={{maxWidth: '42rem'}}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              NETTOYAGE<br />
              INDUSTRIEL DE<br />
              CONFIANCE
            </h2>
            <p style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              marginBottom: '2rem',
              color: '#f3f4f6',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              Créez un environnement de travail propre et sain adapté à vos besoins.
            </p>
          </div>
        </div>
      </section>

      <section style={aboutSectionStyle}>
        <div style={containerStyle}>
          <div style={{maxWidth: '48rem'}}>
            <p style={textStyle}>
              Depuis 1996, Flaviense Mayday Nettoyage met son savoir-faire et son engagement au service de la propreté et de l'hygiène professionnelle.
            </p>
            <p style={textStyle}>
              Entreprise familiale à taille humaine, nous intervenons auprès des entreprises, syndics, collectivités et sites industriels pour garantir des environnements de travail propres, sûrs et agréables.
            </p>
            <p style={{...textStyle, fontWeight: '500'}}>
              Choisir Flaviense Mayday Nettoyage, c'est choisir un partenaire de confiance.
            </p>
          </div>

          <div style={statsContainerStyle}>
            {stats.map((stat, index) => (
              <div key={index} style={statStyle}>
                <div style={statNumberStyle}>{stat.number}</div>
                <div style={statLabelStyle}>{stat.label}</div>
                <div style={statLineStyle}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={servicesSectionStyle}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={sectionTitleStyle}>
            NOUS TRAVAILLONS SUR<br />
            TOUS TYPES DE LOCAUX
          </h2>
          <Link 
            to="/apropos" 
            style={buttonStyle}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#115e59'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#0f766e'}
          >
            Plus d'infos
          </Link>

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
                  style={serviceImageStyle}
                />
                <div style={cardOverlayStyle}></div>
                <div style={cardContentStyle}>
                  <h3 style={cardTitleStyle}>{service.title}</h3>
                  <div style={cardLineStyle}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={commitmentsSectionStyle}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>
          <h2 style={sectionTitleStyle}>Nos Engagements</h2>

          <div style={commitmentsGridStyle}>
            {commitments.map((commitment, index) => (
              <div key={index} style={commitmentCardStyle}>
                <div style={iconContainerStyle}>
                  {commitment.icon}
                </div>
                <h3 style={commitmentTitleStyle}>{commitment.title}</h3>
                <p style={commitmentTextStyle}>{commitment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={testimonialsSectionStyle}>
        <div style={testimonialsContainerStyle}>
          <h2 style={sectionTitleStyle}>
            NOTRE RÉPUTATION<br />
            EST IMMACULÉE
          </h2>

          <div>
            <div style={lineStyle}></div>
            <p style={quoteStyle}>
              "{testimonials[0].text}"
            </p>
            <p style={authorStyle}>
              {testimonials[0].author}
            </p>
          </div>

          <div style={clientsGridStyle}>
            {clients.map((client, index) => (
              <div key={index} style={clientCardStyle}>
                <p style={clientNameStyle}>{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Accueil;