import React from 'react';
import { FaBriefcase, FaGraduationCap, FaCode, FaTrophy } from 'react-icons/fa';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'education' | 'project' | 'achievement';
  icon: React.ReactNode;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Senior Full Stack Developer',
    company: 'Freelance',
    description: 'Membangun 60+ website untuk berbagai klien, spesialisasi React, Laravel, dan solusi e-commerce.',
    type: 'work',
    icon: <FaBriefcase />
  },
  {
    id: 2,
    year: '2023',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    description: 'Mulai fokus pada pengembangan website modern dengan teknologi terkini dan best practices.',
    type: 'work',
    icon: <FaCode />
  },
  {
    id: 3,
    year: '2022',
    title: 'Lulus dengan Prestasi',
    company: 'Universitas',
    description: 'Menyelesaikan pendidikan dengan fokus pada web development dan software engineering.',
    type: 'achievement',
    icon: <FaTrophy />
  },
  {
    id: 4,
    year: '2021',
    title: 'Mulai Belajar Programming',
    company: 'Self-Learning',
    description: 'Memulai perjalanan di dunia programming dengan mempelajari HTML, CSS, JavaScript, dan PHP.',
    type: 'education',
    icon: <FaGraduationCap />
  },
  {
    id: 5,
    year: '2020',
    title: 'First Website Project',
    company: 'Personal Project',
    description: 'Membuat website pertama dan jatuh cinta dengan dunia web development.',
    type: 'project',
    icon: <FaCode />
  }
];

const Timeline: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="timeline" className="section section-alt" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Perjalanan <span className="gradient-text">Karir</span>
          </h2>
          <p className="section-subtitle">
            Timeline pengalaman dan pencapaian dalam dunia teknologi
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div 
              key={item.id} 
              className={`timeline-item ${item.type} ${isVisible ? 'reveal active' : 'reveal'}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                transition: `all 0.6s ease ${index * 0.1}s`
              }}
            >
              <div className="timeline-marker">
                <div className="timeline-icon">
                  {item.icon}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;