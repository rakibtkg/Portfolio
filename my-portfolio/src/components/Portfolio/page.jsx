import { useState } from 'react';
import portfolioData from '../../data/portfolioData';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import styles from './page.module.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const filtersAnimation = useScrollAnimation({ threshold: 0.2 });

  const categories = ['all', ...new Set(portfolioData.portfolio.map(project => project.type))];
  
  const filteredProjects = filter === 'all' 
    ? portfolioData.portfolio 
    : portfolioData.portfolio.filter(project => project.type === filter);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const { ref: projectsRef, visibleItems } = useStaggerAnimation(
    displayedProjects.length,
    100
  );

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section className={styles.portfolio} id="portfolio">
      <div className={styles.portfolioContainer}>
        <div 
          ref={headerAnimation.ref}
          className={`section-header ${headerAnimation.isVisible ? 'fade-in-down' : ''}`}
        >
          <h2 className="section-title">My Portfolio</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Recent projects I've worked on</p>
        </div>

        <div 
          ref={filtersAnimation.ref}
          className={`${styles.portfolioFilters} ${
            filtersAnimation.isVisible ? 'fade-in-up' : ''
          }`}
        >
          {categories.map(category => (
            <button
              key={category}
              className={`${styles.filterBtn} ${filter === category ? styles.active : ''}`}
              onClick={() => {
                setFilter(category);
                setVisibleProjects(6);
              }}
            >
              {category.replace(/-/g, ' ')}
            </button>
          ))}
        </div>

        <div ref={projectsRef} className={styles.portfolioGrid}>
          {displayedProjects.map((project, index) => (
            <div 
              key={index} 
              className={`${styles.portfolioCard} ${
                visibleItems.includes(index) ? 'animate-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.portfolioImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.portfolioOverlay}>
                  <div className={styles.portfolioLinks}>
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.portfolioLink}
                        aria-label="View on GitHub"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.portfolioLink}
                        aria-label="View live demo"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.portfolioContent}>
                <span className={styles.portfolioCategory}>{project.type}</span>
                <h3 className={styles.portfolioTitle}>{project.title}</h3>
                <p className={styles.portfolioDescription}>Project description not available</p>
              </div>
            </div>
          ))}
        </div>

        {displayedProjects.length < filteredProjects.length && (
          <div className={styles.portfolioLoadMore}>
            <button className="btn btn-primary" onClick={loadMore}>
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
