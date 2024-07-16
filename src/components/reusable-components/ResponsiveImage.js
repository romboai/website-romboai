import React from 'react';
import styles from './ResponsiveImage.module.css';

const ResponsiveImage = ({ backgroundSrc, topSrc, alt, ratioWidth, ratioHeight }) => {
  const paddingBottom = (ratioHeight / ratioWidth) * 100;

  return (
    <div className={styles.responsiveImageContainer} style={{ paddingBottom: `${paddingBottom}%` }}>
      <img src={backgroundSrc} alt={alt} className={styles.backgroundImage} />
      <img src={topSrc} alt="Top Image" className={styles.topImage} />
    </div>
  );
};

export default ResponsiveImage;
