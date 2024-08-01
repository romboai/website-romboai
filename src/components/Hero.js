import React, {useEffect} from 'react';
import styles from './Hero.module.css';
import heroVideo from '../img/hero_back_play.mp4';
import Separator from './Separator';
import separatorImage from '../img/separator-11.png';
import mask_group from '../img/mask-group-flipped.png';
import {useVideo} from '../VideoContext'; // Import the useVideo hook


function Hero() {
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
    <div className={styles.hero}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className={styles.heroVideo}
        poster={mask_group} // Optional poster image
      >
        <source src={heroVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentMessage}>
          Revolutionizing <br/>
          Spectral Analysis <br/>
          with Artificial Intelligence
        </div>
        <Separator src={separatorImage} className={styles.separator} alt="Separator"/>
      </div>
    </div>
  );
}

export default Hero;