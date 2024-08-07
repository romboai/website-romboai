import React from 'react';
import styles from './ProductSection.module.css';
import logo from "../img/logo-1.svg";
import groupIcon from "../img/Group-56.svg";

function ProductSection() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <div className={styles.caption}>PRODUCT OVERVIEW</div>
          <div className={styles.secondaryHeadline}>Bibendum amet at molestie mattis.</div>
        </div>
        <div className={styles.paragraph}>
          The Rombo AI Analyzer is a cutting-edge solution designed to transform
          spectral analysis through the power of artificial intelligence.
          Integrating state-of-the-art machine learning algorithms with robust
          spectral analysis techniques, this platform offers unparalleled accuracy,
          efficiency, and depth of insight across a broad spectrum of applications.
          From pharmaceuticals to environmental monitoring, the Rombo AI Analyzer is
          equipped to handle complex data analysis, ensuring precision and
          reliability in every result.
          <br/>
        </div>
      </div>
      <div className={styles.videoContainer}>
        <img src={logo} className={styles.logo} alt="Rombo AI Logo"/>
        <img className={styles.groupIcon} alt="" src={groupIcon}/>
      </div>
    </div>

  );
}

export default ProductSection;