import React, {useEffect} from 'react';
import styles from "./Contact.module.css";
import contactVideo from "../img/hero_back_play.mp4";
import RightColumn from "./reusable-components/RightColumn";
import livello6 from "../img/livello-1-4.svg";
import StaticMap from "./reusable-components/StaticMap";
import {useVideo} from "../VideoContext";
import mask_group from "../img/mask-group-flipped.png";
import subdivide from "../img/Subdivide_line.svg";
import vector1 from "../img/Vector0.svg";

const Contact = () => {
  const {videoRef, isVideoPlaying, playVideo, pauseVideo} = useVideo();

  useEffect(() => {
    // Play video on initial render if not playing
    if (!isVideoPlaying) {
      playVideo();
    }

    return () => {
      // Pause video when component unmounts
      pauseVideo();
    };
  }, [isVideoPlaying, playVideo, pauseVideo]);

  return (
    <div className={styles.contact}>
      <div className={styles.contactMainContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={styles.contactVideo}
          poster={mask_group}
          controlsList="nodownload"
        >
          <source src={contactVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className={styles.mask}></div>
        <div className={styles.contactContent}>
          <div className={styles.contactContainer}>
            <div className={styles.contactContentMessage}>
              Contact Us <br/>
              <div className={styles.atRomboAiContainer}>
                <p
                  className={styles.atRomboAi}>{`At Rombo AI, we're committed to supporting your journey towards revolutionizing spectral analysis with AI. `}</p>
                <p className={styles.atRomboAi}>&nbsp;</p>
                <p className={styles.whetherYouHave}>Whether you have questions, need technical support, or want to
                  explore how our solutions can benefit your organization, our team is ready to assist.</p>
              </div>
            </div>
            <div className={styles.form}>
              <RightColumn/>
            </div>

          </div>
        </div>
        {/*<Separator src={separatorImage} className={styles.separator}*/}
        {/*           alt="Separator"/> /!* Add class for positioning *!/*/}
        <div className={styles.separator}>
          <img className={styles.subdivideLine1} alt="" src={subdivide}/>
          <img className={styles.vector1} alt="" src={vector1}/>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.contactMapSection}>
        <div className={styles.mapView}>
          {/*<GoogleMapComponent /> /!* Include the Google Map *!/*/}
          <StaticMap/>
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
          <img src={livello6} alt="sdfsd" className={styles.backgroundImage}/>
        </div>
      </div>
    </div>
  );
}

export default Contact;