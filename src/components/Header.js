import React, {useState} from 'react';
import styles from './Header.module.css';
import logo from '../img/logo-1.svg'; // Adjust the path as necessary
import arrowDown from '../img/vector-1.svg';

const Header = ({onMenuClick, className}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClick = (content) => {
    onMenuClick(content);
    setMenuVisible(false); // Hide menu after click
  };

  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#" onClick={() => handleMenuClick('home')}>
            <img src={logo} alt="Rombo AI Logo"/>
          </a>
        </div>
        <button className={styles.menuToggle} onClick={toggleMenu}>☰</button>
        <nav>
          {/*onClick={() => handleMenuClick('aboutus')}
          onClick={() => handleMenuClick('solutions')}
          onClick={() => handleMenuClick('product1')}
          onClick={() => handleMenuClick('product2')}
          onClick={() => handleMenuClick('resource1')}
          onClick={() => handleMenuClick('resource2')}
          */}
          <ul className={`${styles.navList} ${menuVisible ? styles.visible : ''}`}>
            <li><a href="#" onClick={() => handleMenuClick('home')}>Home</a></li>
            <li><a href="#" onClick={() => handleMenuClick('contactus')}>Contact Us</a></li>
            <li><a href="#" onClick={() => handleMenuClick('aboutus')}>About Us</a></li>
            <li><a href="#" onClick={() => handleMenuClick('solutions')}>Solutions</a></li>
            <li className={styles.hasDropdown}>
              <a href="#">Products <img src={arrowDown} alt="Dropdown Arrow" className={styles.arrowDown}/></a>
              <ul className={styles.dropdown}>
                <li><a href="#" onClick={() => handleMenuClick('product1')}>Product 1</a></li>
                <li><a href="#" onClick={() => handleMenuClick('product2')}>Product 2</a></li>
              </ul>
            </li>
            <li className={styles.hasDropdown}>
              <a href="#">Resources <img src={arrowDown} alt="Dropdown Arrow" className={styles.arrowDown}/></a>
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
