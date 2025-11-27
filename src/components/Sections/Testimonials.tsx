import React from 'react';
import { FiStar } from 'react-icons/fi';
import { Card } from '../UI/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { testimonials } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FiStar
        key={index}
        size={16}
        style={{
          color: index < rating ? '#fbbf24' : '#d1d5db',
          fill: index < rating ? '#fbbf24' : 'none'
        }}
      />
    ));
  };

  return (
    <section id="testimonials" className="section section-alt" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Testimoni <span className="gradient-text">Client</span>
          </h2>
          <p className="section-subtitle">
            Apa kata mereka yang sudah mempercayakan proyeknya kepada saya
          </p>
        </div>

        <div className="grid grid-2" style={{ gap: '2rem' }}>
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className={isVisible ? 'fade-in-up' : ''} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: '1rem',
                    border: '3px solid var(--primary-200)'
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{ 
                    fontSize: '1.1rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.25rem',
                    color: 'var(--gray-900)'
                  }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.9rem', 
                    color: 'var(--gray-600)',
                    marginBottom: '0.5rem'
                  }}>
                    {testimonial.role} - {testimonial.company}
                  </p>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <blockquote style={{
                fontSize: '0.95rem',
                lineHeight: '1.6',
                color: 'var(--gray-700)',
                fontStyle: 'italic',
                margin: 0,
                padding: '1rem',
                background: 'var(--gray-50)',
                borderRadius: '8px',
                borderLeft: '4px solid var(--primary-500)',
                position: 'relative'
              }}>
                <span style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '10px',
                  fontSize: '2rem',
                  color: 'var(--primary-500)',
                  lineHeight: 1
                }}>
                  "
                </span>
                {testimonial.message}
                <span style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '10px',
                  fontSize: '2rem',
                  color: 'var(--primary-500)',
                  lineHeight: 1
                }}>
                  "
                </span>
              </blockquote>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Card style={{ display: 'inline-block', padding: '2rem' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: 'var(--gray-900)'
            }}>
              Ingin Bergabung dengan Client yang Puas?
            </h3>
            <p style={{ 
              color: 'var(--gray-600)', 
              marginBottom: '1.5rem',
              maxWidth: '400px'
            }}>
              Ratusan client telah mempercayakan proyek mereka. Saatnya giliran Anda merasakan pelayanan terbaik!
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <span style={{ fontSize: '2rem' }}>⭐</span>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary-600)' }}>
                  4.9/5.0
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>
                  Rating Client
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};