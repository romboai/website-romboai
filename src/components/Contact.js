import React from 'react';
import styles from "./Contact.module.css";
import contactVideo from "../img/hero_back_play.mp4";
import Separator from "./Separator";
import separatorImage from "../img/separator-11.png";
import RightColumn from "./reusable-components/RightColumn";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <video autoPlay muted loop className={styles.contactVideo}>
        <source src={contactVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.contactContent}>
        <div className={styles.contactContainer}>
          <div className={styles.contactContentMessage}>
            Contact Us <br/>
            <div className={styles.atRomboAiContainer}>
              <p className={styles.atRomboAi}>{`At Rombo AI, we're committed to supporting your journey towards revolutionizing spectral analysis with AI. `}</p>
              <p className={styles.atRomboAi}>&nbsp;</p>
              <p className={styles.whetherYouHave}>Whether you have questions, need technical support, or want to explore how our solutions can benefit your organization, our team is ready to assist.</p>
            </div>
          </div>
          <RightColumn />
        </div>
        <Separator src={separatorImage} className={styles.separator} alt="Separator"/> {/* Add class for positioning */}
      </div>
    </div>
  );
}

export default Contact;