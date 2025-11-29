import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProjectShowcase: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar 
        key={i} 
        style={{ 
          color: i < rating ? '#ffd700' : 'rgba(255,255,255,0.3)',
          fontSize: '1rem',
          marginRight: '2px'
        }} 
      />
    ));
  };

  return (
    <section className="section" style={{ padding: '2rem 0', background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ⭐ Project Showcase
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
            Project terbaik dengan rating tinggi!
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Real Project 1 */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/remaja tengah.jpg" 
              alt="Website Remaja Tengah Teater"
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Website Remaja Tengah Teater</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Platform digital komunitas teater remaja
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              {renderStars(5)}
              <span style={{ color: 'white', fontSize: '0.9rem', marginLeft: '0.5rem' }}>5.0</span>
            </div>
          </div>

          {/* Real Project 2 */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/todo.jpg" 
              alt="Aplikasi Manajemen Tugas"
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Aplikasi Manajemen Tugas</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Task management dengan real-time collaboration
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              {renderStars(4)}
              <span style={{ color: 'white', fontSize: '0.9rem', marginLeft: '0.5rem' }}>4.8</span>
            </div>
          </div>

          {/* Real Project 3 */}
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '16px',
            padding: '1.5rem',
            textAlign: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/boking hotel.jpg" 
              alt="Sistem Booking Hotel"
              style={{
                width: '100%',
                height: '120px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1rem' }}>Sistem Booking Hotel</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginBottom: '1rem' }}>
              Platform reservasi hotel dengan payment gateway
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
              {renderStars(5)}
              <span style={{ color: 'white', fontSize: '0.9rem', marginLeft: '0.5rem' }}>4.9</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default ProjectShowcase;