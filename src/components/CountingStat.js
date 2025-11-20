import React, { useState, useEffect, useRef } from 'react';

// Composant pour animer un chiffre lors de son apparition au scroll
const CountingStat = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isCounting = useRef(false);

  // Intersection Observer pour déclencher l'animation
  useEffect(() => {
    const currentRef = ref.current; // Copie de la ref pour la fonction de nettoyage
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCounting.current) {
          isCounting.current = true;
          let start = 0;
          const end = parseInt(number, 10);
          const duration = 2000; // Durée de l'animation en ms
          const stepTime = Math.ceil(duration / end); // Calcul du temps entre chaque incrément
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
              setCount(end); // Assurez-vous d'atteindre la valeur exacte
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.8 } // Déclenchement à 80% de visibilité
    );

    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [number]);

  const statStyle = { textAlign: 'center' };
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

  return (
    <div style={statStyle} ref={ref}>
      <div style={statNumberStyle}>{count}{number > 100 ? '+' : ''}</div>
      <div style={statLabelStyle}>{label}</div>
      <div style={statLineStyle}></div>
    </div>
  );
};

export default CountingStat;