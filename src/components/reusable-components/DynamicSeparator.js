// DynamicSeparator.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './DynamicSeparator.module.css';

function DynamicSeparator({ subdivideSrc, vectorSrc, position }) {
  const subdivideLineClass = position === 'top' ? styles.subdivideLineTop : styles.subdivideLineBottom;
  const vectorClass = position === 'top' ? styles.vectorTop : styles.vectorBottom;
  const sectionClass = position === 'top' ?  styles.sectionBottom : styles.sectionTop ;
  return (
    <div className={`${styles.section} ${sectionClass}`}>
      <img
        className={`${styles.subdivideLine} ${subdivideLineClass}`}
        alt="subdivide"
        src={subdivideSrc}
      />
      <img
        className={`${styles.vector} ${vectorClass}`}
        alt="vector"
        src={vectorSrc}
      />
    </div>
  );
}

DynamicSeparator.propTypes = {
  subdivideSrc: PropTypes.string.isRequired,
  vectorSrc: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom']).isRequired,
};

export default DynamicSeparator;