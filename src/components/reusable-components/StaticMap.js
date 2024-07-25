import React from 'react';
import styles from './StaticMap.module.css';
import mapImage0 from '../../img/map-image0.png';
import zoomControls0 from '../../img/zoom-controls0.svg';
import image0 from '../../img/image0.png';
import pin0 from '../../img/pin0.svg';
import union0 from '../../img/union0.svg';
import clipPathGroup0 from '../../img/clip-path-group0.svg';

const StaticMap = () => {
  return (<div className={styles.googleMapsWidget}>
      <img className={styles.mapImage} alt="" src={mapImage0}/>
      <img className={styles.zoomControls} alt="" src={zoomControls0}/>
      <div className={styles.satellite}>
        <img className={styles.image} alt="" src={image0}/>
      </div>
      <div className={styles.button}>
        <div className={styles.viewLargerMap}>View larger map</div>
      </div>
      <img className={styles.pin} alt="" src={pin0}/>
      <img className={styles.union} alt="" src={union0}/>
      <div className={styles.livello1}>
        <img className={styles.clipPathGroup} alt="" src={clipPathGroup0}/>
      </div>
    </div>
  );
}
export default StaticMap;