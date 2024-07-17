import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../img/logo-1.svg'; // Adjust the path as necessary
import arrowDown from '../img/vector-1.svg';

const Header = ({ onMenuClick, className }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Rombo AI Logo" />
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>☰</button>
        <nav>
          <ul className={`${styles.navList} ${menuVisible ? styles.visible : ''}`}>
            <li><a href="#" onClick={() => onMenuClick('home')}>Home</a></li>
            <li><a href="#" onClick={() => onMenuClick('aboutus')}>About Us</a></li>
            <li><a href="#" onClick={() => onMenuClick('contactus')}>Contact Us</a></li>
            <li><a href="#" onClick={() => onMenuClick('solutions')}>Solutions</a></li>
            <li className={styles.hasDropdown}>
              <a href="#">Products <img src={arrowDown} alt="Dropdown Arrow" className={styles.arrowDown} /></a>
              <ul className={styles.dropdown}>
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
              </ul>
            </li>
            <li className={styles.hasDropdown}>
              <a href="#">Resources <img src={arrowDown} alt="Dropdown Arrow" className={styles.arrowDown} /></a>
              <ul className={styles.dropdown}>
                <li><a href="#">Resource 1</a></li>
                <li><a href="#">Resource 2</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;