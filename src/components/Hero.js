import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import heroVideo from '../img/hero_back_play.mp4';
import Separator from './Separator';
import separatorImage from '../img/separator-11.png';
import mask_group from '../img/mask-group-flipped.png';


// Function to detect if the device is an Apple device
function isAppleDevice() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Detect iOS devices
  const isiOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

  // Detect macOS devices with ARM chips (like M1 Mac)
  const isMacARM = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

  // Detect Safari browser specifically
  const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);

  // Return true if the device is any Apple device or running Safari
  return isiOS || isMacARM || isSafari;
}

function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Function to play the video with error handling
    const playVideo = async () => {
      try {
        await video.play();
        console.log('Video is playing');
      } catch (error) {
        console.error('Video playback failed:', error);
        // Handle fallback logic or notify the user if necessary
      }
    };

    // Use the Apple device detection function
    if (isAppleDevice()) {
      console.log("Running on an Apple device or Safari");
      playVideo();
    } else {
      console.log("Not running on an Apple device");
      playVideo();
    }
  }, []);

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
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.mask}></div>
      <div className={styles.heroContent}>
        <div className={styles.heroContentMessage}>
          Revolutionizing <br />
          Spectral Analysis <br />
          with Artificial Intelligence
        </div>
        <Separator src={separatorImage} className={styles.separator} alt="Separator" />
      </div>
    </div>
  );
}

export default Hero;