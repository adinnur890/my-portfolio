import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { Card } from '../UI/Card';
import { Button } from '../UI/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { projects, categories } from '../../data/projects';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const { ref, isVisible } = useScrollAnimation();

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'Semua') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
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
            <div key={project.id} className="project-card hover-lift" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image gradient-border" onClick={() => window.open(project.image, '_blank')} style={{ cursor: 'pointer' }}>
                <img
                  src={project.image}
                  alt={project.title}
                />

              </div>

              <div className="project-content">
                <h3 className="project-title text-shimmer">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag magnetic-btn">
                      {tech}
                    </span>
                  ))}
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};