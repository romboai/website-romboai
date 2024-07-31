import React from 'react';
import styles from './HeroBlog.module.css';
import heroImage from '../img/imageHero.png';
import Separator from "./Separator";
import separatorImage from "../img/separator-11.png";
import forma20 from "../img/forma1.png";


function HeroBlog() {
  return (
    <div className={styles.hero}>
      <div className={styles.mask1}></div>
      <div className={styles.mask}></div>
      <div className={styles.frame76}>
        <div className={styles.ellipse1}></div>
        <div className={styles.ellipse2}></div>
        <div className={styles.ellipse3}></div>
        <div className={styles.ellipse4}></div>
        <div className={styles.ellipse5}></div>
      </div>
      <img className={styles.imageVideo} alt="" src={heroImage}/>
      <div className={styles.heroContent}>
        <div className={styles.heroContentMessage1}>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <div className={styles.mainHeadline}>Article_01</div>
            </div>
            <div className={styles.paragraph}>
              Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing massa
              vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus
              nulla. In malesuada vulputate pharetra ipsum orci.
            </div>
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>Read more</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroContentMessage2}>
          <img className={styles.forma20} alt="" src={forma20}/>
        </div>
      </div>
      <Separator src={separatorImage} className={styles.separator} alt="Separator"/> {/* Add class for positioning */}
    </div>
  );
}

export default HeroBlog;