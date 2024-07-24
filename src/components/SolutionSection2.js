import React from 'react';
import styles from './SolutionSection2.module.css';
import forma1 from '../img/forma1.png';
import forma3 from '../img/forma3.png';
import backlogo from '../img/back-logo.svg';
import HorizontalListView from "./reusable-components/HorizontalListView";
import pexelsPhoto1 from "../img/https-www-pexels-com-photo-two-women-in-front-of-dry-erase-boa-2.png";
import pexelsPhoto2 from "../img/https-www-pexels-com-photo-photo-of-people-doing-handshakes-31-2.png";
import pexelsPhoto3 from "../img/https-www-pexels-com-photo-photo-of-woman-looking-at-man-31831-2.png";
import subdivide from "../img/Subdivide_line.svg";
import vector2 from "../img/Vector3.svg";

function SolutionSection2() {
  return (
    <div className={styles.section}>
      <img className={styles.subdivideLine} alt="" src={subdivide}/>
      <img className={styles.vector2} alt="" src={vector2}/>
      <div className={styles.topSection}>
        <div className={styles.sectionText}>
          <div className={styles.top}>
            <div className={styles.caption}>Use Cases</div>
            <div className={styles.secondaryHeadline}>
              Situations where your product can be used
              <br/>
              to solve the challenge
            </div>
          </div>

          <div className={styles.paragraphTitle}>
            Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc in
            eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet,
            aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque sit
            consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <img className={styles.forma1} alt="" src={forma1}/>
        <div className={styles.paragraph}>
          <div className={styles.secondaryHeadline1}>
            All-In-One Crude Oil Analysis Suite
          </div>
          <p>
            <span className={styles.vision}>{`Reduced Hardware and Maintenance Costs: `}</span>
            <span>Consolidates multiple testing apparatuses into a single, efficient unit, significantly cutting down on equipment expenses and maintenance needs.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Data-Driven Insights: `}</span>
            <span> AI integration provides deeper analytical capabilities, enhancing predictive maintenance and operational strategy.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Enhanced Operational Efficiency: `}</span>
            <span> Streamlines the analysis process, allowing for quicker decision-making and improved workflow. One single device for all quality and property estimation needs.</span>
          </p>
        </div>
      </div>
      <div className={styles.bottomSection1}>
        <img className={styles.forma1} alt="" src={forma3}/>
        <img className={styles.image7} alt="" src={backlogo}/>
        <div className={styles.paragraph}>
          <div className={styles.secondaryHeadline1}>
            Full Crude Oil Assay Analysis
          </div>
          <p>
            <span>Leverages the combined power of Nuclear Magnetic Resonance (NMR) and Artificial Intelligence (AI) to accurately estimate</span>
            <span className={styles.vision}>over 40 different properties of crude oil,</span>
            <span>including but not limited to density, viscosity, sulfur content, and more.</span>
            <br/>
            <br/>
            <br/>
            <span className={styles.vision}>{`ASTM/ISO Accuracy: `}</span>
            <span>Adheres to stringent American Society for Testing and Materials (ASTM) and International Organization for Standardization (ISO) accuracy standards, ensuring high-quality, reliable results.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Reliability and Accuracy of Conventional Analyzers: `}</span>
            <span> reamlined customer service: Matches or exceeds the performance of traditional crude oil analysis equipment in terms of reliability and accuracy, providing confidence in the results.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Streamlined Analysis Process: `}</span>
            <span> Reduces the need for multiple tests and equipment, leading to a more efficient workflow.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Data-Driven Decision Making: `}</span>
            <span> Empowers operators with precise, comprehensive data for better decision-making in processing and refining operations.</span>

          </p>
        </div>
      </div>

    </div>

  );
}

export default SolutionSection2;