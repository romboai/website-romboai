import React from 'react';
import styles from "./About.module.css";
import contactVideo from "../img/hero_back_play.mp4";
import separatorImage from "../img/Subdivide_line.svg";
import GoogleMapComponent from "./reusable-components/GoogleMap";
import logo from "../img/logo-1.svg";
import groupIcon from "../img/Group-56.svg";
import History from "./History";
import separator9 from '../img/separator-8.png';

const About = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactMainContainer}>
        <video autoPlay muted loop className={styles.contactVideo}>
          <source src={contactVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className={styles.mask}></div>
        <div className={styles.contactContent}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContentMessage}>
              We are Company AI
            </div>

            <div className={styles.videoContainer}>
              <img src={logo} className={styles.logo} alt="Rombo AI Logo"/>
              <img className={styles.groupIcon} alt="" src={groupIcon}/>
            </div>

            <div className={styles.sectionText}>
              <div className={styles.top}>
                <b className={styles.caption}>Innovation Through AI-Driven Spectral Analysis</b>
                <b className={styles.mainHeadline}>Purus sagittis fringilla arcu neque.</b>
                <b className={styles.secondaryHeadline}>Welcome to ROMBO AI</b>
              </div>
              <div className={styles.paragraph}>Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit
                nunc in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non, amet, aliquet scelerisque
                nullam sagittis, pulvinar. Fermentum scelerisque sit consectetur hac mi. Mollis leo eleifend ultricies
                purus iaculis.
              </div>
            </div>
            <div className={styles.visionUtilizingThePrinciplParent}>
              <div className={styles.visionUtilizingTheContainer}>
                <p className={styles.visionUtilizingThePrincipl}>
                  <span className={styles.vision}>{`Vision: `}</span>
                  <span className={styles.utilizingThePrinciples}>Utilizing the principles of nuclearmagnetic resonance at lower magnetic field strengths, our technology offers anon-invasive, highly sensitive approach to understand the molecular compositionand properties of materials. </span>
                </p>
              </div>
              <div className={styles.missionIesAnamalgamationContainer}>
                <p className={styles.visionUtilizingThePrincipl}>
                  <span className={styles.mission}>{`Mission: `}</span>
                  <span className={styles.utilizingThePrinciples}>ies anamalgamation of cutting-edge Low Field NMR (Nuclear Magnetic Resonance) andArtificial Intelligence (AI). This synergy brings a new dimension to productanalysis, redefining precision, speed, and depth of insights. </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={separatorImage} className={styles.separator}
           alt="Separator"/> {/* Add class for positioning */}
      <History/>
      <img className={styles.separator9} src={separator9} alt="Separator 9"/>
      <div className={styles.contactMapSection}>
        <div className={styles.mapView}>
          <GoogleMapComponent/> {/* Include the Google Map */}
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.frameParent}>
            <div className={styles.ourLocationWrapper}>
              <div className={styles.ourLocation}>Our Location</div>
            </div>
            <div className={styles.contactInformationWrapper}>
              <b className={styles.contactInformation}>Contact information</b>
            </div>
            <div className={styles.headquartersWrapper}>
              <b className={styles.headquarters}>Headquarters</b>
            </div>
            <div className={styles.romboaiSrlCagliariSardiniWrapper}>
              <div className={styles.ourLocation}>
                <p className={styles.romboaiSrl}>Rombo.ai srl</p>
                <p className={styles.romboaiSrl}>Cagliari, Sardinia - Italy</p>
                <p className={styles.romboaiSrl}>{`Open Campus, `}</p>
                <p className={styles.cagliari}>09123 Cagliari</p>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.div}>+39 348 23 53 703</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;