import { useState, useEffect } from 'react';
import styles from './page.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Manual scroll spy - more reliable
      const sections = ['home', 'about', 'services', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100; // Navbar height offset
      
      let currentSection = 'home';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial call
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple and reliable scroll spy
  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ['home', 'about', 'services', 'projects', 'education', 'contact'];
      const scrollY = window.scrollY;
      
      // Check each section to find which one is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          
          // If we've scrolled past the top of this section
          if (scrollY >= sectionTop - 150) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      
      // Default to home if no section matches
      setActiveSection('home');
    };

    // Run immediately and on scroll
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection);
    
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo} onClick={() => scrollToSection('home')}>
          <span className={styles.logoText}>Rakibul Islam</span>
        </div>

        <div className={`${styles.navbarLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
