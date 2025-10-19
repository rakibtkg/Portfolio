import portfolioData from '../../data/portfolioData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './page.module.css';

const About = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const imageAnimation = useScrollAnimation({ threshold: 0.3 });
  const textAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <section className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div 
          ref={headerAnimation.ref}
          className={`section-header ${headerAnimation.isVisible ? 'fade-in-down' : ''}`}
        >
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className={styles.aboutContent}>
          <div 
            ref={imageAnimation.ref}
            className={`${styles.aboutImage} ${imageAnimation.isVisible ? 'fade-in-left' : ''}`}
          >
            <img src="/cv/my-profile-image.jpg" alt="About me" />
            <div className={styles.aboutImageBg}></div>
          </div>

          <div 
            ref={textAnimation.ref}
            className={`${styles.aboutText} ${textAnimation.isVisible ? 'fade-in-right' : ''}`}
          >
            <h3>Hello! I'm a passionate developer</h3>
            <p className={styles.aboutDescription}>{portfolioData.about.bio}</p>
            
            {/* Optionally render highlights if you add them to portfolioData.about.highlights */}
          </div>
        </div>

        <div className={styles.aboutStats}>
          {portfolioData.funFacts.map((fact, index) => (
            <div 
              key={index}
              className={`${styles.statItem} ${textAnimation.isVisible ? 'animate-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.statNumber}>{fact.value}+</div>
              <div className={styles.statLabel}>{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
