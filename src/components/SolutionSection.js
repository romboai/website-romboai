import React from 'react';
import styles from './SolutionSection.module.css';
import modalitIsolamento8 from '../img/modalit-isolamento-8.svg';
import modalitIsolamento9 from '../img/modalit-isolamento-9.svg';
import forma5_10 from '../img/forma51.png';
import subdivide from '../img/Subdivide_line.svg';
import vector2 from '../img/Vector2.svg';
import separatorImage from "../img/separator-11.png";
import Separator from "./Separator";
import DynamicSeparator from "./reusable-components/DynamicSeparator";
import vector3 from "../img/Vector3.svg";
function SolutionSection() {
  return (
    <div className={styles.section}>
        <div className={styles.content}>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <div className={styles.caption}>Solutions Overview</div>
              <div className={styles.secondaryHeadline}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Bibendum amet at molestie mattis.
              </div>
            </div>
          </div>
          <div className={styles.frame1}>
            <div className={styles.frame2}>
              <img className={styles.modalitIsolamento} alt="" src={modalitIsolamento8}/>
              <div className={styles.paragraph}>
                Tristique elementum, ac maecenas enim fringilla placerat scelerisque
                semper.
              </div>
            </div>
            <div className={styles.frame12}>
              <img className={styles.modalitIsolamento2} alt="" src={modalitIsolamento9}/>
              <div className={styles.paragraph}>
                Curabitur magna cras euismod pharetra, mauris malesuada sit enim,
                elementum.
              </div>
            </div>
          </div>
          <div className={styles.buttonsGroup}></div>
        </div>
        <img className={styles.forma51} alt="" src={forma5_10}/>

      <img className={styles.subdivideLine} alt="" src={subdivide}/>
      <img className={styles.vector2} alt="" src={vector2}/>

    </div>

  );
}

export default SolutionSection;