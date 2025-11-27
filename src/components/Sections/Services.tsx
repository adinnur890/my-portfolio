import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { services } from '../../data/services';

export const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Layanan <span className="gradient-text">Profesional</span>
          </h2>
          <p className="section-subtitle">
            Solusi web development terbaik untuk kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {services.map((service, index) => (
            <Card key={service.id} className={isVisible ? 'fade-in-up' : ''} style={{ animationDelay: `${index * 0.1}s` }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem',
                  color: 'var(--gray-900)'
                }}>
                  {service.title}
                </h3>
                <p style={{ 
                  color: 'var(--gray-600)', 
                  fontSize: '0.95rem',
                  lineHeight: '1.5'
                }}>
                  {service.description}
                </p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ 
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  marginBottom: '1rem',
                  color: 'var(--gray-800)'
                }}>
                  Fitur Termasuk:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '0.75rem',
                      fontSize: '0.9rem'
                    }}>
                      <FiCheck 
                        size={16} 
                        style={{ 
                          color: '#10b981', 
                          marginRight: '0.75rem',
                          flexShrink: 0
                        }} 
                      />
                      <span style={{ color: 'var(--gray-700)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ 
                borderTop: '1px solid var(--gray-200)', 
                paddingTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, var(--primary-500), var(--secondary-500))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    {service.price}
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: 'var(--gray-500)' 
                  }}>
                    *Harga dapat disesuaikan
                  </div>
                </div>
                
                <Button 
                  onClick={() => window.open('https://wa.me/628979045222?text=Halo%20Adin,%20saya%20tertarik%20dengan%20layanan%20' + encodeURIComponent(service.title), '_blank')}
                  size="sm"
                >
                  <span>Pesan</span>
                  <FiArrowRight style={{ marginLeft: '0.5rem' }} size={14} />
                </Button>
              </div>
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
              Butuh Solusi Custom?
            </h3>
            <p style={{ 
              color: 'var(--gray-600)', 
              marginBottom: '1.5rem',
              maxWidth: '400px'
            }}>
              Konsultasikan kebutuhan spesifik Anda. Kami siap membantu membuat solusi yang tepat untuk bisnis Anda.
            </p>
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/628979045222?text=Halo%20Adin,%20saya%20ingin%20konsultasi%20untuk%20solusi%20custom', '_blank')}
            >
              Konsultasi Gratis
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};