import { useState, useEffect } from 'react';
import portfolioData from '../../data/portfolioData';
import styles from './page.module.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = portfolioData.about.roles;

  useEffect(() => {
    const handleTyping = () => {
      const currentIndex = loopNum % titles.length;
      const fullText = titles[currentIndex];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Download CV button clicked');
    
    // Simple direct download approach
    const link = document.createElement('a');
    link.href = '/cv/my-cv.pdf';
    link.download = 'Rakibul-Islam-CV.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Ensure link is not visible
    link.style.position = 'absolute';
    link.style.left = '-9999px';
    
    // Add to DOM
    document.body.appendChild(link);
    
    // Trigger click
    link.click();
    
    // Remove from DOM after a short delay
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 100);
    
    console.log('Download initiated');
  };

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroGreeting}>Hello, I'm</p>
            <h1 className={styles.heroName}>{portfolioData.about.name}</h1>
            <div className={styles.heroTitle}>
              <span className={styles.typingText}>{text}</span>
              <span className={styles.cursor}>|</span>
            </div>
            <p className={styles.heroDescription}>{portfolioData.about.bio}</p>
            
            <div className={styles.heroButtons}>
              <button 
                className="btn btn-primary" 
                onClick={scrollToContact}
                aria-label="Contact me for work opportunities"
              >
                Hire Me
              </button>
              <button 
                type="button"
                className="btn btn-secondary"
                onClick={handleDownloadCV}
                aria-label="Download my resume as PDF"
              >
                Download CV
              </button>
            </div>

            <div className={styles.heroSocial}>
              {portfolioData.about.social.find(s => s.icon === 'github') && (
                <a href={portfolioData.about.social.find(s => s.icon === 'github').url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              )}
              {portfolioData.about.social.find(s => s.icon === 'linkedin') && (
                <a href={portfolioData.about.social.find(s => s.icon === 'linkedin').url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <img src={portfolioData.about.image} alt={portfolioData.about.name} />
              <div className={styles.statusIndicator}>
                <div className={styles.statusDot}></div>
                <span className={styles.statusText}>Available for work</span>
              </div>
              <div className={styles.imageBackground}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
