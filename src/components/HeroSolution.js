import React from 'react';
import styles from './HeroSolution.module.css';
import heroVideo from '../img/hero_back_play.mp4';
import forma20 from "../img/forma2.png";
import subdivide from "../img/Subdivide_line.svg";
import vector1 from "../img/Vector0.svg";


function HeroSolution() {
  return (
    <div className={styles.hero}>
      <video autoPlay muted loop playsInline className={styles.heroVideo}>
        <source src={heroVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentMessage1}>
          Solutions:
          Can be specific to an industry, application, or a topic.
        </div>
        <div className={styles.heroContentMessage2}>
          <img className={styles.forma20} alt="" src={forma20}/>
        </div>
      </div>

      <img className={styles.subdivideLine1} alt="" src={subdivide}/>
      <img className={styles.vector1} alt="" src={vector1}/>

    </div>
  );
}

export default HeroSolution;