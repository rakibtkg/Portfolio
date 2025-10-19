import portfolioData from '../../data/portfolioData';
import styles from './page.module.css';

const Resume = () => {
  return (
    <section className={styles.resume} id="resume">
      <div className={styles.resumeContainer}>
        <div className="section-header">
          <h2 className="section-title">My Resume</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className={styles.resumeContent}>
          <div className={styles.resumeSection}>
            <h3 className={styles.resumeSectionTitle}>
              <span className={styles.sectionIcon}>💼</span>
              Work Experience
            </h3>
            <div className={styles.timeline}>
              {portfolioData.resume.experiences.map((exp, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelinePeriod}>{exp.period}</span>
                    <h4 className={styles.timelineTitle}>{exp.title}</h4>
                    <p className={styles.timelineCompany}>
                      {exp.company}
                    </p>
                    <p className={styles.timelineDescriptionText}>{exp.description}</p>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                        Visit Website →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.resumeSection}>
            <h3 className={styles.resumeSectionTitle}>
              <span className={styles.sectionIcon}>🎓</span>
              Education
            </h3>
            <div className={styles.timeline}>
              {portfolioData.resume.education.map((edu, index) => (
                <div key={index} className={styles.timelineItem}>
                  <div className={styles.timelineDot}></div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelinePeriod}>{edu.period}</span>
                    <h4 className={styles.timelineTitle}>{edu.degree}</h4>
                    <p className={styles.timelineCompany}>
                      {edu.school} - {edu.location}
                    </p>
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

export default Resume;
