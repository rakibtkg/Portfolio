import portfolioData from '../../data/portfolioData';
import { useScrollAnimation, useStaggerAnimation } from '../../hooks/useScrollAnimation';
import styles from './page.module.css';

const Services = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const { ref: servicesRef, visibleItems: visibleServices } = useStaggerAnimation(
    portfolioData.services.length,
    150
  );
  const skillsHeaderAnimation = useScrollAnimation({ threshold: 0.2 });
  const { ref: skillsRef, visibleItems: visibleSkills } = useStaggerAnimation(
    portfolioData.skills.length,
    150
  );

  return (
    <section className={styles.services} id="services">
      <div className={styles.servicesContainer}>
        <div 
          ref={headerAnimation.ref}
          className={`section-header ${headerAnimation.isVisible ? 'fade-in-down' : ''}`}
        >
          <h2 className="section-title">What I Do</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Services I offer to my clients</p>
        </div>

        <div ref={servicesRef} className={styles.servicesGrid}>
          {portfolioData.services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.serviceCard} ${
                visibleServices.includes(index) ? styles['fade-in-up'] : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.serviceIcon}>
                {service.icon.startsWith('/') || service.icon.startsWith('http') ? (
                  <img src={service.icon} alt={`${service.title} icon`} />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.skillsSection}>
          <h3 
            ref={skillsHeaderAnimation.ref}
            className={`${styles.skillsTitle} ${
              skillsHeaderAnimation.isVisible ? 'fade-in-up' : ''
            }`}
          >
            My Skills
          </h3>
          <div ref={skillsRef} className={styles.skillsGrid}>
            {portfolioData.skills.map((skill, index) => (
              <div 
                key={index} 
                className={`${styles.skillCard} ${
                  visibleSkills.includes(index) ? styles['animate-in'] : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={styles.skillHeader}>
                  <span className={styles.skillIcon}>{skill.icon}</span>
                  <h4 className={styles.skillCategory}>{skill.category}</h4>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
                <div className={styles.skillTechnologies}>
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={techIndex} style={{ width: '100%' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span className={styles.techBadge}>{tech.name}</span>
                        <span className={styles.skillPercent}>
                          {skill.category === 'Problem Solving' && tech.value ? tech.value : `${tech.percent}%`}
                        </span>
                      </div>
                      {!['Problem Solving', 'Management & Leadership'].includes(skill.category) && (
                        <div className={styles.skillBarContainer}>
                          <div
                            className={styles.skillBar}
                            style={{ width: `${tech.percent}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
