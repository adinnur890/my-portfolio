import React, { useEffect, useState } from 'react';
import { Card } from '../UI/Card';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { skills, achievements } from '../../data/skills';

export const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (isVisible) {
      // Reset first
      setAnimatedSkills({});
      
      // Then animate
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => ({
            ...prev,
            [skill.name]: skill.level
          }));
        }, index * 200 + 300);
      });
    }
  }, [isVisible]);

  return (
    <section id="about" className="section section-alt" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          <p className="section-subtitle">
            Saya passionate dalam menciptakan pengalaman digital yang membuat perbedaan
          </p>
        </div>

        <div className="grid grid-2" style={{ marginBottom: '4rem' }}>
          {/* Skills */}
          <Card className="glass-card hover-lift">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }} className="text-shimmer">
              Keahlian & Expertise
            </h3>
            <div>
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: isVisible ? `${animatedSkills[skill.name] || 0}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="glass-card hover-lift">
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }} className="text-shimmer">
              Pencapaian
            </h3>
            <div className="stats-grid">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="stat-item">
                  <div className="stat-number">
                    {achievement.number}
                  </div>
                  <div className="stat-label">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Personal Description */}
        <Card className="glass-card hover-lift" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }} className="text-shimmer">
            Perjalanan Saya
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            lineHeight: '1.7', 
            maxWidth: '800px', 
            margin: '0 auto',
            color: 'var(--gray-600)'
          }}>
            Dengan pengalaman lebih dari 5 tahun dalam pengembangan web, saya telah memiliki kesempatan 
            untuk bekerja dengan startup dan perusahaan mapan untuk mewujudkan visi digital mereka. 
            Saya mengkhususkan diri dalam membangun aplikasi yang scalable dan user-friendly menggunakan 
            teknologi modern seperti React, Node.js, dan platform cloud. Ketika tidak coding, Anda akan 
            menemukan saya mengeksplorasi teknologi baru, berkontribusi pada proyek open-source, atau 
            berbagi pengetahuan dengan komunitas developer.
          </p>
        </Card>
      </div>
    </section>
  );
};