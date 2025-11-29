import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects, categories } from '../../data/projects';
import SearchProjects from '../UI/SearchProjects';
import LikeButton from '../UI/LikeButton';
import ShareButtons from '../UI/ShareButtons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [searchQuery, setSearchQuery] = useState('');
  const { ref, isVisible } = useScrollAnimation();

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterProjects(category, searchQuery);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterProjects(activeCategory, query);
  };

  const filterProjects = (category: string, query: string) => {
    let filtered = projects;
    
    if (category !== 'Semua') {
      filtered = filtered.filter(project => project.category === category);
    }
    
    if (query) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  };

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 className="section-title">
            Karya <span className="gradient-text">Terbaik</span>
          </h2>
          <p className="section-subtitle">
            Koleksi project yang telah saya bangun dengan passion dan dedikasi tinggi
          </p>
        </div>

        {/* Search Projects */}
        <SearchProjects onSearch={handleSearch} />
        
        {/* Category Filter */}
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            >
              <FiFilter style={{ marginRight: '0.5rem' }} />
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-3">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card hover-lift reveal ${isVisible ? 'active' : ''}`} 
              style={{ 
                animationDelay: `${index * 0.15}s`,
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                opacity: isVisible ? 1 : 0,
                transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
              }}
            >
              <div className="project-image gradient-border magnetic-hover" onClick={() => window.open(project.image, '_blank')} style={{ cursor: 'pointer' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    transition: 'transform 0.4s ease',
                    transform: 'scale(1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title text-shimmer animate-title">
                  {project.title}
                </h3>
                <p className="project-description animate-fade-up">
                  {project.description}
                </p>

                <div className="project-tech animate-stagger">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={tech} 
                      className="tech-tag magnetic-btn pulse-on-hover"
                      style={{
                        animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s`
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-actions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <LikeButton projectId={project.id} initialLikes={0} />
                  <ShareButtons 
                    title={project.title}
                    description={project.description}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};