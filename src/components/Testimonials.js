import React, { useState } from 'react';
import { testimonials, clients } from '../assets/data';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const sectionStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white'
  };

  const containerStyle = {
    maxWidth: '1024px',
    margin: '0 auto',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '4rem'
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

  const dotsStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    marginTop: '2rem'
  };

  const dotStyle = (isActive) => ({
    width: '0.75rem',
    height: '0.75rem',
    borderRadius: '50%',
    backgroundColor: isActive ? '#0f766e' : '#d1d5db',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  });

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

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          NOTRE RÉPUTATION<br />
          EST IMMACULÉE
        </h2>

        <div>
          <div style={lineStyle}></div>
          <p style={quoteStyle}>
            "{testimonials[currentTestimonial].text}"
          </p>
          <p style={authorStyle}>
            {testimonials[currentTestimonial].author}
          </p>

          <div style={dotsStyle}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                style={dotStyle(index === currentTestimonial)}
              />
            ))}
          </div>
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
  );
};

export default Testimonials;