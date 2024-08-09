import React from 'react';
import styles from './Engage.module.css';
import groupImage from '../img/group-2-2.png';

const Engage = ({onMenuClick}) => {
  const handleMenuClick = (content) => {
    onMenuClick(content);
  };
  return (
    <section className={styles.engage}>
      <div className={styles.top}>
        <p className={styles.caption}>DISCOVER WHAT AI-DRIVEN SPECTRAL ANALYSIS CAN DO FOR YOU</p>
        <div className={styles.div2}>Engage with Rombo AI</div>
      </div>
      <p className={styles.paragraph}>
        Ready to transform your analytical processes? Connect with our experts to explore tailored solutions for
        your business challenges. Reach out to our sales team, schedule a demo, or sign up for our newsletter for
        the latest insights and updates.
      </p>
      <a href="#" onClick={() => handleMenuClick('contactus')}>
        <div className={styles.overlapGroup}>
          <div className={styles.buttonsGroupWrapper}>
            <div className={styles.buttonsGroupLeft}>
              <button className={styles.button}>
                <div className={styles.textContainer}>
                  <div className={styles.textWrapper2}>Contact</div>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.frame23}>
            <div className={styles.buttonsGroupRight}>
              <button className={styles.button2}>
                <div className={styles.textContainer}>
                  <div className={styles.textWrapper2}>now</div>
                </div>
              </button>
            </div>
          </div>
          <img className={styles.group10} src={groupImage} alt="Group"/>
        </div>
      </a>
    </section>
  );
};

export default Engage;