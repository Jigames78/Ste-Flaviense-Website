import React from 'react';

const Commitments = () => {
  const sectionStyle = {
    padding: '5rem 1rem',
    background: 'linear-gradient(to bottom right, #d1fae5, #99f6e4)'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '4rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  };

  const cardStyle = {
    textAlign: 'center'
  };

  const iconContainerStyle = {
    width: '4rem',
    height: '4rem',
    margin: '0 auto 1rem',
    color: '#0f766e'
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '0.75rem'
  };

  const cardTextStyle = {
    fontSize: '0.875rem',
    color: '#374151',
    lineHeight: '1.5'
  };

  const commitments = [
    {
      title: "Qualités de service",
      text: "Nous garantissons des interventions rigoureuses, planifiées avec soin et régulièrement contrôlées afin d'assurer un niveau de service irréprochable à chacun de nos clients.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,50 L40,60 L70,30" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="50" r="35"/>
        </svg>
      )
    },
    {
      title: "Proximité & réactivité",
      text: "Notre équipe encadrante reste disponible et à l'écoute de vos besoins pour intervenir rapidement et efficacement en toutes circonstances.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="30" y="35" width="40" height="35" rx="2"/>
          <path d="M35,35 L35,30 Q35,25 40,25 L60,25 Q65,25 65,30 L65,35"/>
        </svg>
      )
    },
    {
      title: "Responsabilité sociale",
      text: "Nous investissons dans la formation continue de nos agents et valorisons leur travail pour favoriser leur développement professionnel et personnel.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="50" cy="40" r="12"/>
          <path d="M35,80 Q35,65 50,65 Q65,65 65,80" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Hygiène et sécurité",
      text: "Nous respectons strictement les protocoles en vigueur et utilisons uniquement des produits certifiés afin de garantir la santé et la sécurité de tous.",
      icon: (
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M40,60 L50,70 L60,60" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="50" cy="50" r="25"/>
        </svg>
      )
    }
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Nos Engagements</h2>

        <div style={gridStyle}>
          {commitments.map((commitment, index) => (
            <div key={index} style={cardStyle}>
              <div style={iconContainerStyle}>
                {commitment.icon}
              </div>
              <h3 style={cardTitleStyle}>{commitment.title}</h3>
              <p style={cardTextStyle}>{commitment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitments;