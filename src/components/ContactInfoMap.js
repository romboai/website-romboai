import React from 'react';
import styles from './ContactInfoMap.module.css';
import GoogleMapComponent from "./reusable-components/GoogleMap";
import StaticMap from "./reusable-components/StaticMap";
function ContactInfoMap() {
  return (
    <div className={styles.contactMapSection}>
    <div className={styles.mapView}>
      {/*<GoogleMapComponent/> /!* Include the Google Map *!/*/}
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
    </div>
  </div>
  );
}

export default ContactInfoMap