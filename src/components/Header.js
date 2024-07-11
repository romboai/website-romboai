import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../img/logo-1.svg'; // Adjust the path as necessary
import arrowDown from '../img/vector-1.svg';

const Header = ({ className }) => {
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
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Solutions</a></li>
            <li className={styles.hasDropdown}>
              <a href="#">Products <img src={arrowDown} alt="Dropdown Arrow" className={styles.arrowDown} /></a>
              <ul className={styles.dropdown}>
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
              </ul>
            </li>
            <li className={styles.hasDropdown}>
              <a href="#">Resource <img src={arrowDown} alt="Dropdown Arrow" className={styles.arrowDown} /></a>
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