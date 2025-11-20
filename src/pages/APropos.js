import React, { useState, useEffect, useRef } from 'react'; 
// REMOVED: import CountingStat from '../components/CountingStat'; 

// NOUVEAU COMPOSANT LOCAL POUR GÉRER L'AOS
const AOSItem = ({ children, delay = '0s', style, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );
        const currentRef = ref.current; // Correction pour ESLint
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div 
            ref={ref}
            className={`fade-in-up ${className} ${isVisible ? 'is-visible' : ''}`}
            style={{ ...style, transitionDelay: delay }}
        >
            {children}
        </div>
    );
};


const APropos = () => {
  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white'
  };

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto'
  };

  const sectionTitleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '2rem'
  };

  const textStyle = {
    fontSize: '1.125rem',
    color: '#374151',
    marginBottom: '1.5rem',
    lineHeight: '1.75'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    marginTop: '3rem'
  };

  const imageCardStyle = {
    borderRadius: '0.5rem',
    overflow: 'hidden',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
  };

  const cardImageStyle = {
    width: '100%',
    height: '20rem',
    objectFit: 'cover'
  };

  const contentSectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f9fafb'
  };

  const twoColumnStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem',
    alignItems: 'center'
  };

  const highlightBoxStyle = {
    backgroundColor: '#0f766e',
    color: 'white',
    padding: '3rem',
    borderRadius: '0.5rem'
  };

  const highlightTitleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  };

  const highlightTextStyle = {
    fontSize: '1.125rem',
    lineHeight: '1.75'
  };

  // REMOVED: statsContainerStyle, statStyle, statNumberStyle, statLabelStyle, statLineStyle, stats (comme demandé)


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
          src="/images/hero/hero-about.jpg"
          alt="À propos de nous - Camionnette de nettoyage devant un bâtiment"
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
            30 ANS<br />
            D'EXPERIENCE
          </h1>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <h2 style={sectionTitleStyle}>Notre Histoire</h2>
          
          <p style={textStyle}>
            Fondée en 1996, Flaviense Mayday Nettoyage est une société à Responsabilité Limitée implantée à Paris, spécialisée dans le nettoyage industriel auprès des entreprises, syndics, collectivités et sites industriels pour garantir des environnements de travail propres, sûrs et conformes aux exigences sanitaires.
          </p>

          <div style={gridStyle}>
            <div style={imageCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
                alt="Équipe de nettoyage travaillant ensemble"
                style={cardImageStyle}
              />
            </div>
            <div style={imageCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&h=400&fit=crop"
                alt="Professionnel nettoyant une fenêtre"
                style={cardImageStyle}
              />
            </div>
            <div style={imageCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=400&fit=crop"
                alt="Matériel de nettoyage industriel"
                style={cardImageStyle}
              />
            </div>
          </div>

          {/* BLOCK DE STATISTIQUES RETIRÉ */}

        </div>
      </section>

      <section style={contentSectionStyle}>
        <div style={containerStyle}>
          <div style={twoColumnStyle}>
            <div>
              <h2 style={sectionTitleStyle}>
                LAISSEZ-NOUS<br />
                FAIRE LE TRAVAIL
              </h2>
              <p style={textStyle}>
                Paragraphe. Vous pouvez le modifier et ajouter votre texte. Double-cliquez ici ou cliquez sur « Modifier le texte » pour ajouter votre contenu et personnaliser la police. Utilisez cet espace pour raconter une histoire et vous présenter à vos visiteurs. Vous pouvez le faire glisser-déposer où vous le souhaitez sur la page.
              </p>
              <p style={textStyle}>
                C'est l'espace idéal pour rédiger un long texte. Utilisez-le pour donner plus d'informations sur votre entreprise. Vous pouvez présenter votre équipe et les services que vous proposez. Vous pouvez également expliquer à vos visiteurs vos motivations, votre histoire, vos objectifs, et mettre en avant vos points forts.
              </p>
            </div>
            <div style={imageCardStyle}>
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                alt="Professionnel utilisant une machine de nettoyage"
                style={cardImageStyle}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={sectionStyle}>
        <div style={containerStyle}>
          <div style={twoColumnStyle}>
            <AOSItem // NOUVEAU COMPOSANT
              delay='0s'
              style={highlightBoxStyle}
            >
              <h3 style={highlightTitleStyle}>Notre Mission</h3>
              <p style={highlightTextStyle}>
                Offrir des services de nettoyage industriel de qualité supérieure, en garantissant la propreté, la sécurité et le bien-être de nos clients tout en respectant l'environnement.
              </p>
            </AOSItem>
            <AOSItem // NOUVEAU COMPOSANT
              delay='0.2s'
              style={highlightBoxStyle}
            >
              <h3 style={highlightTitleStyle}>Nos Valeurs</h3>
              <p style={highlightTextStyle}>
                Excellence, intégrité, respect de l'environnement et engagement envers la satisfaction client sont au cœur de tout ce que nous faisons.
              </p>
            </AOSItem>
          </div>
        </div>
      </section>
    </>
  );
};

export default APropos;