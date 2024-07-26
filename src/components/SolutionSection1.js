import React from 'react';
import styles from './SolutionSection1.module.css';
import image7 from '../img/image7.png';
import HorizontalListView from "./reusable-components/HorizontalListView";
import pexelsPhoto1 from "../img/https-www-pexels-com-photo-two-women-in-front-of-dry-erase-boa-2.png";
import pexelsPhoto2 from "../img/https-www-pexels-com-photo-photo-of-people-doing-handshakes-31-2.png";
import pexelsPhoto3 from "../img/https-www-pexels-com-photo-photo-of-woman-looking-at-man-31831-2.png";
import VerticalListView from "./reusable-components/VerticalListView";

const items = [
  {
    imageSrc: pexelsPhoto1,
    description: 'Consolidates multiple testing apparatuses into a single, efficient unit, significantly cutting down on equipment expenses and maintenance needs.',
    title: 'All-In-One Analysis Suite',
    date: 'Aug 23, 2023'
  },
  {
    imageSrc: pexelsPhoto2,
    description: 'Reduce the manual intervention of specialized personnel. Daily laboratory tasks reduced.',
    title: 'Fully Automatic Measure',
    date: 'Sep 2, 2023'
  },
  {
    imageSrc: pexelsPhoto3,
    description: 'Reduce the manual intervention of specialized personnel. Daily laboratory tasks reduced.',
    title: 'Fully Automatic Measure',
    date: 'Sep 2, 2023'
  },
  // Add more items as needed
];

function SolutionSection1() {
  return (
    <div className={styles.section}>
      <div className={styles.topSection}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <div className={styles.caption}>Use Cases</div>
            <div className={styles.secondaryHeadline}>
              Situations where your product can be used to solve the challenge
            </div>
          </div>
        </div>
      </div>
      <VerticalListView items={items} backgroundColor="#2f3666"/>
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <div className={styles.caption}>Related roles</div>
          <div className={styles.secondaryHeadline}>
            Company roles that are effected by the challenge and solutions
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <img className={styles.image7} alt="" src={image7}/>
        <div className={styles.paragraph}>
          <p>
            <span className={styles.vision}>{`At the core of our solutions: `}</span>
            <span>lies anamalgamation of cutting-edge Low Field NMR (Nuclear Magnetic Resonance) andArtificial Intelligence (AI). This synergy brings a new dimension to productanalysis, redefining precision, speed, and depth of insights.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Low Field NMR: `}</span>
            <span> Utilizing the principles of nuclearmagnetic resonance at lower magnetic field strengths, our technology offers anon-invasive, highly sensitive approach to understand the molecular compositionand properties of materials.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Artificial Intelligence: `}</span>
            <span> Our proprietary AI algorithms areengineered to interpret and extrapolate vast amounts of data obtained throughNMR, enabling quick, accurate, and comprehensive analysis. The AI's learningcapabilities continuously enhance the accuracy and depth of our insights.</span>
          </p>
        </div>
      </div>
    </div>

  );
}

export default SolutionSection1;