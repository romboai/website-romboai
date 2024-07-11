import React from 'react';
import styles from './Clients.module.css';
import client1 from '../img/logo-1.svg'; // Adjust the path as necessary
import client2 from '../img/logo-1.svg'; // Adjust the path as necessary
import client3 from '../img/logo-1.svg'; // Adjust the path as necessary
import client4 from '../img/logo-1.svg'; // Adjust the path as necessary
import client5 from '../img/logo-1.svg'; // Adjust the path as necessary
import divider from '../img/divider-2.svg';
import pexelsPhoto1 from '../img/https-www-pexels-com-photo-two-women-in-front-of-dry-erase-boa-2.png';
import pexelsPhoto2 from '../img/https-www-pexels-com-photo-photo-of-people-doing-handshakes-31-2.png';
import pexelsPhoto3 from '../img/https-www-pexels-com-photo-photo-of-woman-looking-at-man-31831-2.png';
import separator9 from '../img/separator-9.png';
import manipolo from '../img/manipolo.svg';
import separator10 from '../img/separator-10.png';
import image10 from '../img/image-2-3.png';
import image11 from '../img/image-4-2.png';
import image12 from '../img/image-5-2.png';
import image13 from '../img/image-6-2.png';
import image14 from '../img/image-3-2.png';
import heroVideo from "../img/hero_back_play.mp4";
import Separator from "./Separator";
import separatorImage from "../img/separator-9.png";

function Clients() {
  return (
    <section className={styles.clients}>
      {/*<video autoPlay muted loop className={styles.clientVideo}>*/}
      {/*  <source src={heroVideo} type="video/mp4" />*/}
      {/*  Your browser does not support the video tag.*/}
      {/*</video>*/}
      {/*<div className={styles.mask}></div>*/}

      <div className={styles.containerClient}>
        <video autoPlay muted loop className={styles.clientVideo}>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.mask}></div>
        <div className={styles.top3}>
          <p className={styles.textWrapper5}>PROVEN IMPACT, TRUSTED BY INDUSTRY LEADERS</p>
          <div className={styles.textWrapper6}>Clients and Partners</div>
        </div>
        <div className={styles.group14}>

            <img className={styles.image13} src={image13} alt="Image 13" />
            <img className={styles.image11} src={image11} alt="Image 11" />
            <img className={styles.image10} src={image10} alt="Image 10" />
            <img className={styles.image12} src={image12} alt="Image 12" />
            <img className={styles.image14} src={image14} alt="Image 14" />


          {/*<div className={styles.overlap12}>*/}
          {/*  <img className={styles.image10} src={image10} alt="Image 10" />*/}
          {/*  <img className={styles.image11} src={image11} alt="Image 11" />*/}
          {/*</div>*/}
          {/*<div>*/}
          {/*  <img className={styles.image12} src={image12} alt="Image 12" />*/}
          {/*  <img className={styles.image13} src={image13} alt="Image 13" />*/}
          {/*  <img className={styles.image14} src={image14} alt="Image 14" />*/}
          {/*</div>*/}
        </div>
        {/*<img className={styles.separator} src={separator9}/>*/}
        {/*<img className={styles.separator} src={separator9} alt="Separator 9"/>*/}
        {/*<Separator src={separatorImage} alt="Separator"/> /!* Add class for positioning *!/*/}
      </div>
      <Separator src={separatorImage} alt="Separator" className={styles.separator}/> {/* Add class for positioning */}
    </section>
  );
}

export default Clients;