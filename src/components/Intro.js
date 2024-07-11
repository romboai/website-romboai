import React from 'react';
import styles from './Intro.module.css';
import livello_left from '../img/livello-1-7.svg';
import livello_right from '../img/livello-1-6.svg';
import livello8 from '../img/livello-1-5.svg';
import modalitIsolamento8 from '../img/modalit-isolamento-8.svg';
import modalitIsolamento9 from '../img/modalit-isolamento-9.svg';
import modalitIsolamento10 from '../img/modalit-isolamento-10.svg';
import modalitIsolamento11 from '../img/modalit-isolamento-11.svg';

function Intro() {

  return (
    <section className={styles.intro}>
      <div className={styles.introContainer}>
        <div className={styles.introHeader}>
          <div className={styles.sectionText11}>
            <div className={styles.top}>
              <p className={styles.textWrapper5}>WELCOME TO A WORLD OF PRECISION, EFFICIENCY, AND INNOVATION.</p>
              <p className={styles.textWrapper6}>Unlocking a New Era in Chemical Analysis</p>
            </div>
          </div>
        </div>
        <div className={styles.introLeft}>
          <img className={styles.livello} src={livello_left} alt="Left Level"/>
        </div>
        <div className={styles.introBody}>
          <img className={styles.livello8} src={livello8} alt="Background Level"/>
          <div className={styles.paragrafo5}>
            <div className={styles.frame24} >
              <img className={styles.modalitIsolamento} src={modalitIsolamento8} alt="Precision Icon"/>
              <p className={styles.paragrafo6}>
                <span className={styles.textWrapper28}>Precision Redefined<br/></span>
                <span className={styles.textWrapper29}>Our fusion of </span>
                <span className={styles.textWrapper30}>Low Field</span>
                <span className={styles.textWrapper31}>&nbsp;</span>
                <span className={styles.textWrapper29}>NMR and AI delivers unparalleled accuracy, offering insights beyond traditional methods.&nbsp;</span>
              </p>
            </div>
            <div className={styles.frame24}>
              <img className={styles.modalitIsolamento2} src={modalitIsolamento9} alt="Efficiency Icon"/>
              <p className={styles.paragrafo6}>
                <span className={styles.textWrapper28}>Efficiency and Speed<br/></span>
                <span className={styles.textWrapper29}>Say goodbye to time-consuming analysis processes. <br/>Our solution ensures quicker
                      decision-making and faster time-to-market for your products <br/></span>
                <span className={styles.textWrapper21}>15 minutes</span>
                <span
                  className={styles.textWrapper29}> compared to weeks of traditional laboratory analysis&nbsp;&nbsp;</span>
              </p>
            </div>
            <div className={styles.frame24}>
              <img className={styles.modalitIsolamento3} src={modalitIsolamento10} alt="Understanding Icon"/>
              <p className={styles.paragrafo7}>
                <span className={styles.textWrapper3}>In-depth Understanding<br/></span>
                <span className={styles.textWrapper14}>Gain a comprehensive understanding of your product's composition and behavior, empowering
                      data-driven decisions that fuel innovation and enhance quality.&nbsp;</span>
              </p>
            </div>
            <div className={styles.frame24}>
              <img className={styles.modalitIsolamento4} src={modalitIsolamento11} alt="Cost Effective Icon"/>
              <p className={styles.paragrafo7}>
                <span className={styles.textWrapper3}>Cost-Effective Solutions<br/></span>
                <span className={styles.textWrapper14}>Optimize costs by streamlining analysis processes, reducing manual labor, and eliminating potential
                      errors associated with conventional methods.&nbsp;</span>
              </p>
            </div>

          </div>
        </div>
        <div className={styles.introRight}>
          <img className={styles.livello} src={livello_right} alt="Right Level"/>
        </div>
      </div>
    </section>
  );
}

export default Intro;