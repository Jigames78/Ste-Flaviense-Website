import React from 'react';

const About = () => {
  const sectionStyle = {
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

  const stats = [
    { number: '30', label: 'Années de confiance' },
    { number: '400', label: 'Clients satisfaits' },
    { number: '35', label: 'Équipiers' },
    { number: '600', label: 'Locaux propres' }
  ];

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <div style={{maxWidth: '48rem'}}>
          <p style={textStyle}>
            Depuis 1996, Flaviense Mayday Nettoyage met son savoir-faire et son engagement au service de la propreté et de l'hygiène professionnelle.
          </p>
          <p style={textStyle}>
            Entreprise familiale à taille humaine, nous intervenons auprès des entreprises, syndics, collectivités et sites industriels pour garantir des environnements de travail propres, sûrs et agréables. Notre priorité est votre satisfaction.
          </p>
          <p style={textStyle}>
            Nous assurons des interventions rigoureuses, planifiées et contrôlées, avec une équipe disponible, réactive et à l'écoute de vos besoins.
          </p>
          <p style={textStyle}>
            Soucieuse de la sécurité et du respect de l'environnement, notre société utilise des produits certifiés écoresponsables et forme continuellement ses agents afin d'offrir des prestations de qualité durable.
          </p>
          <p style={{...textStyle, fontWeight: '500'}}>
            Choisir Flaviense Mayday Nettoyage, c'est choisir un partenaire de confiance, alliant proximité, professionnalisme et responsabilité.
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
  );
};

export default About;