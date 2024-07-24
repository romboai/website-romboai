import React from 'react';
import styles from './HeroSolution.module.css';
import heroVideo from '../img/hero_back_play.mp4';
import Header from "./Header";
import Separator from "./Separator"; // Import the new Separator component
import separatorImage from "../img/separator-11.png";
import forma20 from "../img/forma2.png";


function HeroSolution() {
  return (
    <div className={styles.hero}>
      <video autoPlay muted loop playsInline className={styles.heroVideo}>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentMessage1}>
          Solutions:
          <br />
          Can be specific to an industry, application, or a topic.
        </div>
        <div className={styles.heroContentMessage2}>
          <img className={styles.forma20} alt="" src={forma20}/>
        </div>
      </div>
      <Separator src={separatorImage} className={styles.separator} alt="Separator"/> {/* Add class for positioning */}
    </div>
  );
}

export default HeroSolution;