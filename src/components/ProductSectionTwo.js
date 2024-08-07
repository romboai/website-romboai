import React from 'react';
import styles from './ProductSectionTwo.module.css';
import forma1 from "../img/forma1.png";
import forma2 from "../img/forma-5-10.png";
import forma3 from "../img/forma3.png";
import forma4 from "../img/forma4.png";
import backlogo from "../img/back-logo.svg";
import backlogo1 from "../img/livello-1-2.svg";
import subdivide from "../img/Subdivide_line.svg";
import vector1 from "../img/Vector4.svg";
import union from "../img/Union.svg";
function ProductSectionTwo() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <div className={styles.caption}>PRODUCT FEATURES</div>
          <div className={styles.secondaryHeadline}>
            NMR AI Analyzer
          </div>
        </div>
      </div>
      <div className={styles.frame88}>
        <div className={styles.frame99}>
          <div className={styles.benchtopNmrHardware}>Benchtop NMR Hardware</div>
        </div>
        <div className={styles.frame100}>
          <div className={styles.personalComputer}>Personal computer</div>
        </div>
        <div className={styles.frame101}>
          <div className={styles.swAiModels}>SW + AI models</div>
        </div>
        <div className={styles.frame102}>
          <div className={styles.specificSamplingGuidance}>specific sampling guidance</div>
        </div>
        <div className={styles.frame103}>
          <div className={styles.aiModelDevelopment}>AI Model DevelopmenT</div>
        </div>
        <div className={styles.frame104}>
          <div className={styles.endUserTraining}>End User Training</div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <img className={styles.forma1} alt="" src={forma2}/>
        <img className={styles.image8} alt="" src={backlogo}/>
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
        <img className={styles.forma4} alt="" src={forma4}/>
        <img className={styles.image7} alt="" src={backlogo1}/>
        <div className={styles.paragraph}>
          <div className={styles.secondaryHeadline1}>
            Full Crude Oil Assay Analysis
          </div>
          <p>
            <span>Leverages the combined power of Nuclear Magnetic Resonance (NMR) and Artificial Intelligence (AI) to accurately estimate</span>
            <span className={styles.vision}> over 40 different properties of crude oil,</span>
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
      <div className={styles.bottomSection2}>
        <img className={styles.forma2} alt="" src={forma1}/>
        <img className={styles.image8} alt="" src={backlogo}/>
        <div className={styles.paragraph}>
          <div className={styles.secondaryHeadline1}>
            Fully Automatic Measurement
          </div>
          <p>
            <span
              className={styles.vision}>{`Feature explanation: reduce the manual intervention of specialised personnel Benefit explanation: `}</span>
            <br/>
            <br/>
            <div className={styles.paragraph1}>
              <ul className={styles.list}>
                <li>
                  Daily laboratory tasks reduced (90% of reduction on components analysis)
                </li>
                <li>
                  ASTM is standard has 2% accuracy, but exposing analysis to humans is
                  error-prone
                </li>
              </ul>
            </div>

            <span className={styles.vision}>{`Reduced Hardware and Maintenance Costs: `}</span>
            <br/>
            <br/>
            <div className={styles.paragraph1}>
              <ul className={styles.list1}>
                <li>
                  An operator compose the sample by mixing the crude oil with a reference chemical.
                </li>
                <li>
                  The acquisition is started via the GUI
                </li>
                <li>
                  The Acquisition is elaborated via AI algorithms
                </li>
                <li>
                  The crude oil Assay is generated
                </li>
              </ul>
            </div>
          </p>
        </div>
      </div>
      <div className={styles.bottomSection1}>
        <img className={styles.forma5} alt="" src={forma3}/>
        <img className={styles.image7} alt="" src={backlogo1}/>
        <div className={styles.paragraph}>
          <div className={styles.secondaryHeadline1}>
            Express Quality Analysis
          </div>
          <p>
            <span className={styles.vision}>{`Feature: `}</span>
            <span> Perform crude oil analysis/ get full report in minutes.</span>
            <br/>
            <span className={styles.vision}>{`Benefit: `}</span>
            <span> Streamline crude oil management by compressing idle times and removing bottlenecks.</span>
            <br/>
            <br/>
            <span className={styles.vision}>{`Explanation: `}</span>
            <br/>
            <span className={styles.vision}>{`2 months `}</span>
            <img className={styles.union} alt="" src={union}/>
            <span className={styles.vision}>{`15 minutes`}</span>
            <br/>
            <div className={styles.paragraph1}>
              <ul className={styles.list}>
                <li>Sample preparations requires 10 minutes</li>
                <li>Sample acquisition by NMR requires 5 minutes</li>
                <li>AI model inference is a matter of seconds.</li>
              </ul>
            </div>
          </p>
        </div>
      </div>

      <img className={styles.subdivideLine1} alt="" src={subdivide}/>
      <img className={styles.vector1} alt="" src={vector1}/>
    </div>
  );
}

export default ProductSectionTwo;