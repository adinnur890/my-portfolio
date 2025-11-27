import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { personalInfo } from '../../data/personal';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Kirim email menggunakan EmailJS
      await emailjs.send(
        'service_k23kusx', // Service ID dari EmailJS
        'template_jgy2nwx', // Template ID dari EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'adinstoksff@gmail.com'
        },
        'v13gO2bWrBXWcWfJS' // Public Key dari EmailJS
      );
      
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Gagal mengirim pesan. Silakan coba lagi atau hubungi via WhatsApp.');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FiPhone, label: 'Telepon', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: FiMapPin, label: 'Lokasi', value: personalInfo.location, href: '#' }
  ];

  const socialLinks = [
    { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: personalInfo.social.twitter, label: 'Twitter' }
  ];

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Mari <span className="gradient-text">Berkolaborasi</span>
          </h2>
          <p className="section-subtitle">
            Punya proyek dalam pikiran? Mari bekerja sama untuk mewujudkan ide Anda
          </p>
        </div>

        <div className="grid grid-2">
          {/* Contact Form */}
          <Card>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              Kirim Pesan
            </h3>
            
            {submitted && (
              <div className="success-message">
                Terima kasih! Pesan Anda telah berhasil dikirim.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-grid" style={{ marginBottom: '1.5rem' }}>
                <div className="form-group">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Nama Anda"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subjek</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Diskusi proyek"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Pesan</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  placeholder="Ceritakan tentang proyek Anda..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                style={{ width: '100%' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner" style={{ marginRight: '0.5rem' }} />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <FiSend style={{ marginRight: '0.5rem' }} />
                    Kirim Pesan
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Card>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                Info Kontak
              </h3>
              <div className="contact-info">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="contact-item">
                    <div className="contact-icon">
                      <Icon size={20} />
                    </div>
                    <div className="contact-details">
                      <h4>{label}</h4>
                      <p>{value}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <a 
                href="https://wa.me/628979045222?text=Halo%20Adin,%20saya%20tertarik%20dengan%20jasa%20pengembangan%20website%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: '#25D366',
                  color: 'white',
                  borderRadius: '25px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  marginTop: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                  width: '100%',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.251"/>
                </svg>
                <span>Order Project via WhatsApp</span>
              </a>
            </Card>


          </div>
        </div>
      </div>
    </section>
  );
};