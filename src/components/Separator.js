import React from 'react';
import PropTypes from 'prop-types';
import styles from './Separator.module.css';

const Separator = ({ src, alt, className }) => {
  return <img className={`${styles.separator} ${className}`} src={src} alt={alt} />;
};
export default Separator;