import React from 'react';
import './Footer.css';
import logo from '../img/romboai-04-1-2.png';
import linkedinIcon from '../img/icon-jam-icons-outline-logos-linkedin-1.svg'; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="ROMBO.AI Logo" className="footer-logo" />
        <p className="footer-text">ROMBO.AI© 2024 - Open Campus, 09123 Cagliari</p>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;