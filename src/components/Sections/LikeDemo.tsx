import React from 'react';
import LikeButton from '../UI/LikeButton';

const LikeDemo: React.FC = () => {
  return (
    <section className="section" style={{ padding: '2rem 0', background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            ❤️ Project Favorit
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem' }}>
            Berikan like pada project yang Anda sukai!
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
            <LikeButton projectId={1} initialLikes={0} />
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
            <LikeButton projectId={2} initialLikes={0} />
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
            <LikeButton projectId={4} initialLikes={0} />
          </div>
        </div>


      </div>
    </section>
  );
};

export default LikeDemo;