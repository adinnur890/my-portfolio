import React from 'react';
import { FiHeart, FiCode, FiCoffee, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../../data/personal';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();



  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Brand & Info */}
        <div className="footer-brand">
          <div className="nav-brand" style={{ marginBottom: '0.5rem' }}>
            {personalInfo.name}
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--gray-600)', marginBottom: '0.5rem' }}>
            Full Stack Developer
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--gray-500)' }}>
            <FiMapPin size={12} />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Quote */}
        <div style={{ textAlign: 'center', maxWidth: '300px' }}>
          <p style={{ 
            fontSize: '0.9rem', 
            fontStyle: 'italic', 
            color: 'var(--gray-600)', 
            marginBottom: '0.5rem',
            lineHeight: '1.4'
          }}>
            "Code is like humor. When you have to explain it, it's bad."
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--gray-500)' }}>- Cory House</p>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            Dibuat dengan{' '}
            <FiHeart size={14} style={{ color: '#ef4444' }} />
            oleh {personalInfo.name}
          </p>
          <p style={{ fontSize: '0.75rem', marginTop: '0.25rem', color: 'var(--gray-500)' }}>
            © {currentYear} Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};