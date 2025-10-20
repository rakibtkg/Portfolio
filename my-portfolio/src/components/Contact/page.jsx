import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import portfolioData from '../../data/portfolioData';
import styles from './page.module.css';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init('qHaIh67NjIeJWwyTD');
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      // Log form data for debugging
      const formData = new FormData(form.current);
      console.log('Form data:', {
        from_name: formData.get('from_name'),
        from_email: formData.get('from_email'),
        subject: formData.get('subject'),
        message: formData.get('message')
      });

      const result = await emailjs.sendForm(
        'service_mncsl4o',     // Your Service ID
        'template_901kkdz',    // Your Template ID  
        form.current,
        'qHaIh67NjIeJWwyTD'    // Your Public Key
      );

      console.log('Email sent successfully:', result);
      setStatus('✅ Thank you! Your message has been sent successfully.');
      form.current.reset();
      
    } catch (error) {
      console.error('EmailJS Error Details:', {
        message: error.message,
        text: error.text,
        status: error.status,
        error: error
      });
      
      let errorMessage = '❌ Failed to send message. ';
      
      if (error.status === 422) {
        errorMessage += 'Please check that all fields are filled correctly.';
      } else if (error.status === 400) {
        errorMessage += 'Invalid request. Please try again.';
      } else if (error.status === 403) {
        errorMessage += 'Service blocked. Please contact me directly.';
      } else {
        errorMessage += 'Please try again or contact me directly.';
      }
      
      setStatus(errorMessage);
    } finally {
      setIsLoading(false);
      // Clear status after 8 seconds
      setTimeout(() => setStatus(''), 8000);
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactContainer}>
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <h3 className={styles.contactInfoTitle}>Contact Information</h3>
            <p className={styles.contactInfoText}>
              Feel free to reach out to me for any inquiries or collaboration opportunities.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h4>Email</h4>
                  <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h4>Phone</h4>
                  <a href={`tel:${portfolioData.contact.phone}`}>{portfolioData.contact.phone}</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <h4>Location</h4>
                  <p>{portfolioData.contact.address}</p>
                </div>
              </div>
            </div>

            <div className={styles.contactSocial}>
              <h4>Follow Me</h4>
              <div className={styles.socialLinks}>
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
          </div>

          <div className={styles.contactFormWrapper}>
            <h3 className={styles.contactFormTitle}>Send Me a Message</h3>
            <form ref={form} className={styles.contactForm} onSubmit={sendEmail}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className={styles.formInput}
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  className={`${styles.formInput} ${styles.formTextarea}`}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${styles.btnSubmit}`}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>

              {status && (
                <p className={`${styles.formStatus} ${
                  status.includes('✅') ? styles.statusSuccess : styles.statusError
                }`}>
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
