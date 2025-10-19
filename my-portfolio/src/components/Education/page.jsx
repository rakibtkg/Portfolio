import portfolioData from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './page.module.css';

const Education = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const educationAnimation = useScrollAnimation({ threshold: 0.3 });
  const experienceAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className={styles.education} id="education">
      <div className={styles.educationContainer}>
        <div 
          ref={headerAnimation.ref}
          className={`section-header ${headerAnimation.isVisible ? 'fade-in-down' : ''}`}
        >
          <h2 className="section-title">Education & Experience</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My academic background and professional journey</p>
        </div>

        <div className={styles.educationContent}>
          {/* Education Section */}
          <div 
            ref={educationAnimation.ref}
            className={`${styles.educationSection} ${
              educationAnimation.isVisible ? 'fade-in-left' : ''
            }`}
          >
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              Education
            </h3>
            <div className={styles.timeline}>
              {portfolioData.resume.education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>
                    <div className={styles.iconInner}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelinePeriod}>{edu.period}</div>
                    <h4 className={styles.timelineTitle}>{edu.degree}</h4>
                    <h5 className={styles.timelineSubtitle}>{edu.school}</h5>
                    {edu.location && (
                      <p className={styles.timelineLocation}>📍 {edu.location}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div 
            ref={experienceAnimation.ref}
            className={`${styles.experienceSection} ${
              experienceAnimation.isVisible ? 'fade-in-right' : ''
            }`}
          >
            <h3 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>💼</span>
              Experience
            </h3>
            <div className={styles.timeline}>
              {portfolioData.resume.experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineIcon}>
                    <div className={styles.iconInner}></div>
                  </div>
                  <div className={styles.timelineContent}>
                    <div className={styles.timelinePeriod}>{exp.period}</div>
                    <h4 className={styles.timelineTitle}>{exp.title}</h4>
                    <h5 className={styles.timelineSubtitle}>
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h5>
                    <p className={styles.timelineDescription}>{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;