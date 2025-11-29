import React, { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiEye, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiTypescript, SiNodedotjs, SiPython } from 'react-icons/si';
import { Button } from '../UI/Button';
import { personalInfo } from '../../data/personal';

export const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const titles = ['Full Stack Developer', 'React Specialist', 'Laravel Developer', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(typeInterval);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="home" className="hero">
      {/* Animated Background Elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.1, zIndex: 1 }}>
        <SiReact size={80} style={{ position: 'absolute', top: '15%', left: '8%', color: '#61dafb' }} className="float-animation" />
        <SiTypescript size={70} style={{ position: 'absolute', top: '25%', right: '12%', color: '#3178c6', animationDelay: '1s' }} className="float-animation" />
        <SiNodedotjs size={75} style={{ position: 'absolute', bottom: '25%', left: '15%', color: '#339933', animationDelay: '2s' }} className="float-animation" />
        <SiPython size={65} style={{ position: 'absolute', bottom: '15%', right: '8%', color: '#3776ab', animationDelay: '3s' }} className="float-animation" />
        
        {/* Additional floating elements */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', width: '4px', height: '4px', background: '#667eea', borderRadius: '50%', animationDelay: '0.5s' }} className="pulse-animation" />
        <div style={{ position: 'absolute', top: '60%', left: '80%', width: '6px', height: '6px', background: '#764ba2', borderRadius: '50%', animationDelay: '1.5s' }} className="pulse-animation" />
        <div style={{ position: 'absolute', top: '80%', left: '30%', width: '3px', height: '3px', background: '#f093fb', borderRadius: '50%', animationDelay: '2.5s' }} className="pulse-animation" />
      </div>

      <div className="hero-content">
        {/* Text Content */}
        <div className="hero-text slide-in-left" style={{ zIndex: 10 }}>
          <h1 className="hero-title">
            Halo, Saya{' '}
            <span className="gradient-text pulse-animation">{personalInfo.name}</span>
          </h1>
          
          <div className="hero-subtitle">
            <span className="typing-text enhanced-typing">
              {displayText}
              <span className="cursor-blink">|</span>
            </span>
          </div>

          <p className="hero-description">
            {personalInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FiEye style={{ marginRight: '0.5rem' }} />
              Lihat Karya
            </Button>
          </div>


        </div>

        {/* Avatar */}
        <div className="hero-avatar slide-in-right" style={{ zIndex: 10 }}>
          <div className="avatar-container float-animation">
            <div className="avatar-glow"></div>
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="avatar-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};