import React from 'react';
import styles from './Hero.module.css';
import heroVideo from '../img/hero_back_play.mp4';
import Header from "./Header";
import Separator from "./Separator"; // Import the new Separator component
import separatorImage from "../img/separator-11.png";


function Hero() {
  return (
    <div className={styles.hero}>
      <video autoPlay muted loop className={styles.heroVideo}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentMessage}>
          Revolutionizing <br />
          Spectral Analysis <br />
          with Artificial Intelligence
        </div>
        <Separator src={separatorImage} className={styles.separator} alt="Separator"/> {/* Add class for positioning */}
      </div>
    </div>
  );
}

export default Hero;