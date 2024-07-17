import React from 'react';
import styles from './Technologies.module.css';
import livello6 from '../img/livello-1-4.svg';
import separator9 from '../img/separator-8.png';
import livello7 from '../img/livello-1-8.svg';
import analyzer from '../img/analyzer-1.png';
import ResponsiveImage from "./reusable-components/ResponsiveImage";

function Technologies() {
  return (
    <section className={styles.technologies}>
      <div className={styles.overlap9}>
        <div className={styles.technologyContainer}>
          <div className={styles.rectangle9}></div>
          <div className={styles.content}>
            <img className={styles.separator9} src={separator9} alt="Separator 9"/>
            {/*<img className={styles.livello7} src={livello7} alt="Level 7"/>*/}
            {/*<img className={styles.livello6} src={livello6} alt="Level 6"/>*/}
            <ResponsiveImage backgroundSrc={livello6} topSrc={livello7} alt="Dynamic Image" ratioWidth={16}
                             ratioHeight={9}
            />
            <img className={styles.analyzer2} src={analyzer}/>
            <div className={styles.containerItemLeft}>
              <div className={styles.paragraf}>
                <p className={styles.p}>
                  <span className={styles.textWrapper3}>Data-Driven Decision Making:<br/></span>
                  <span className={styles.textWrapper4}>
                    Empowers operators with precise, comprehensive data for better decision-making in processing and
                    refining operations. (Patent pending)
                  </span>
                </p>
              </div>
            </div>
            <div className={styles.sectionText8}>
              <div className={styles.top}>
                <div className={styles.textWrapper5}>INCIPIT</div>
                <div className={styles.secondaryHeadline}>Revolutionary Technology</div>
              </div>
            </div>
            <div className={styles.contentContainer}>
              <div className={styles.containerItem}>
                <div className={styles.paragraf}>
                  <p className={styles.atTheCoreOfOur}>
                    <span className={styles.textWrapper19}>At the core of our solutions</span>
                    <span className={styles.textWrapper20}>
                    lies an amalgamation of cutting-edge Low Field NMR (Nuclear Magnetic Resonance) and Artificial
                    Intelligence (AI). This synergy brings a new dimension to product analysis, redefining precision,
                    speed, and depth of insights.&nbsp;<br/><br/>
                  </span>
                    <span className={styles.textWrapper19}>Low Field NMR:<br/></span>
                    <span className={styles.textWrapper20}>
                    Utilising the principles of nuclear-magnetic resonance at lower magnetic field strengths, our
                    technology offers a non-invasive, highly sensitive approach to understand the molecular composition and
                    properties of materials.&nbsp;<br/><br/>
                  </span>
                    <span className={styles.textWrapper19}>Artificial Intelligence:<br/></span>
                    <span className={styles.textWrapper20}>
                    Our proprietary AI algorithms are engineered to interpret and extrapolate vast amounts of data obtained
                  </span>
                    <span className={styles.textWrapper21}>through NMR</span>
                    <span className={styles.textWrapper20}>
                    , enabling quick, accurate, and comprehensive analysis. The AI's learning capabilities
                    continuously enhance the accuracy and depth of our insights.&nbsp;
                  </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;