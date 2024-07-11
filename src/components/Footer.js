import React from 'react';
import styles from './Footer.module.css';
import logo from '../img/romboai-04-1-2.png';
import linkedinIcon from '../img/icon-jam-icons-outline-logos-linkedin-1.svg'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src={logo} alt="ROMBO.AI Logo" className={styles.footerLogo} />
        </div>
        <div className={styles.copyWrite}>
          <p className={styles.footerText}>ROMBO.AI© 2024 - Open Campus, 09123 Cagliari</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className={styles.footerIcon} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;