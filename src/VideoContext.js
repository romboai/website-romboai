// VideoContext.js
import React, { createContext, useContext, useRef, useState, useCallback } from 'react';

// Create a Context for the Video
const VideoContext = createContext();

export const useVideo = () => {
  return useContext(VideoContext);
};

export const VideoProvider = ({ children }) => {
  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Play video only if not already playing
  const playVideo = useCallback(async () => {
    if (videoRef.current && !isVideoPlaying) {
      try {
        await videoRef.current.play();
        setIsVideoPlaying(true);
      } catch (error) {
        console.error('Video playback failed:', error);
      }
    }
  }, [isVideoPlaying]);

  // Pause video only if currently playing
  const pauseVideo = useCallback(() => {
    if (videoRef.current && isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  }, [isVideoPlaying]);

  return (
    <VideoContext.Provider value={{ videoRef, isVideoPlaying, playVideo, pauseVideo }}>
      {children}
    </VideoContext.Provider>
  );
};