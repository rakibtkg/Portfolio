import portfolioData from '../../data/portfolioData';
import styles from './page.module.css';

const Projects = () => {
  // Show all projects at once, no need for load more functionality
  const displayedProjects = portfolioData?.projects || [];

  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projectsContainer}>
        <div className="section-header">
          <h2 className="section-title">Featured Projects ({portfolioData?.projects?.length || 0})</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">A showcase of my recent work and technical expertise</p>
        </div>

        <div className={styles.projectsGrid}>
          {displayedProjects.length === 0 ? (
            <p>No projects found</p>
          ) : (
            displayedProjects.map((project) => (
              <div 
                key={project.id} 
                className={styles.projectCard}
              >
                {project.featured && (
                  <div className={styles.featuredBadge}>
                    <span>✨ Featured</span>
                  </div>
                )}
                
                <div className={styles.projectContent}>
                  <div className={styles.projectHeader}>
                    <span className={styles.projectCategory}>
                      {project.category === 'web' ? '🌐 Web App' : 
                       project.category === 'mobile' ? '📱 Mobile App' :
                       project.category === 'desktop' ? '🖥️ Desktop App' : 
                       `🔧 ${project.category}`}
                    </span>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                  </div>
                  
                  <p className={styles.projectDescription}>{project.description}</p>
                  
                  <div className={styles.projectTechnologies}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className={styles.projectFooter}>
                    <div className={styles.projectMeta}>
                      <span className={styles.projectType}>
                        {project.category === 'web' ? 'Full Stack' : 
                         project.category === 'mobile' ? 'Mobile Development' :
                         project.category === 'desktop' ? 'Desktop Application' :
                         'Software Development'}
                      </span>
                    </div>
                    
                    <div className={styles.projectLinks}>
                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          aria-label="View on GitHub"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span>GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.projectLink}
                          aria-label="View live demo"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                            <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;