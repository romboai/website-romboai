import React from 'react';
import './Header.css';
import logo from '../img/logo-1.svg'; // Adjust the path as necessary
import arrowDown from '../img/vector-1.svg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Rombo AI Logo" />
        </div>
        <nav>
          <button className="menu-toggle">☰</button>
          <ul>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Solutions</a></li>
            <li className="has-dropdown">
              <a href="#">Products <img src={arrowDown} alt="Dropdown Arrow" className="arrow-down" /></a>
              <ul className="dropdown">
                <li><a href="#">Product 1</a></li>
                <li><a href="#">Product 2</a></li>
              </ul>
            </li>
            <li className="has-dropdown">
              <a href="#">Resource <img src={arrowDown} alt="Dropdown Arrow" className="arrow-down" /></a>
              <ul className="dropdown">
                <li><a href="#">Resource 1</a></li>
                <li><a href="#">Resource 2</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;