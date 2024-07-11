import React from 'react';
import styles from './SupportedBy.module.css';
import supportImage from '../img/image-1-2.png';
import Separator from "./Separator";
import separatorImage from "../img/separator-10.png";

const SupportedBy = () => {
  return (
    <section className={styles.supportedBy}>
      <div className={styles.frame26}>
        <div className={styles.sectionText12}>
          <div className={styles.top4}>
            <div className={styles.caption2}>ROMBO.AI</div>
            <div className={styles.secondaryHeadline2}>It supported by</div>
          </div>
        </div>
        <img className={styles.image15} src={supportImage} alt="Support"/>
      </div>
    </section>
  );
};
export default SupportedBy;