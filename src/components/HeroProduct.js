import React from 'react';
import styles from './HeroProduct.module.css';
import heroVideo from '../img/hero_back_play.mp4';
import Separator from "./Separator";
import separatorImage from "../img/separator-11.png";
import forma20 from "../img/forma-5-10.png";


function HeroProduct() {
  return (
    <div className={styles.hero}>
      <video autoPlay muted loop playsInline className={styles.heroVideo}>
        <source src={heroVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.heroContent}>
        <div className={styles.titolo1}>
          <span>
            <span className={styles.titolo1span}>
              Full crude oil assay in minutes
              <br/>
            </span>
            <span className={styles.titolo1span2}>
              The fastest crude oil quality analyser for refineries,
              <br/>
              powered by AI and low-field NMR technology
            </span>
          </span>
        </div>
        <div className={styles.heroContentMessage2}>
          <img className={styles.forma20} alt="" src={forma20}/>
        </div>
      </div>
      <Separator src={separatorImage} className={styles.separator} alt="Separator"/> {/* Add class for positioning */}
    </div>
  );
}

export default HeroProduct;