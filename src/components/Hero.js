import React from 'react';
import './Hero.css';
import heroVideo from '../img/hero_back_play.mp4';
import Header from "./Header";
import separator from "../img/separator-11.png";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay muted loop className="hero-video">
        <source src={heroVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="mask"></div>
      <Header/>
      <div className="hero-content">
        <div className="hero-content-message">Revolutionizing <br/>Spectral Analysis <br/>with Artificial Intelligence</div>
        <img className="separator" src={separator} alt="Dropdown Arrow" />
      </div>
    </div>
  );
}

// const Hero = () => (
//   <div className="hero-container hero">
//     <div className="background"></div>
//     <video autoPlay muted loop className="hero-video">
//       <source src={heroVideo} type="video/mp4"/>
//       Your browser does not support the video tag.
//     </video>
//     <div className="mask-group"></div>
//     <Header/>
//     <div className="hero-title">
//       <h1>Revolutionizing Spectral Analysis with AI</h1>
//       <p>Welcome to a world of precision, efficiency, and innovation.</p>
//     </div>
//   </div>
// );
// import styled from 'styled-components';
// import Header from "./Header";
//
// const HeroContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: hidden;
// `;
//
// const BackgroundVideo = styled.video`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: -1;
// `;
//
// const TextContainer = styled.div`
//   position: absolute;
//   left: 50px;
//   top: 50%;
//   transform: translateY(-50%);
//   color: white;
//   z-index: 1;
// `;
//
// const BottomImage = styled.img`
//   position: absolute;
//   bottom: 10px;
//   height: 200px;
//   z-index: 1;
// `;
//
// const Hero = () => (
//   <HeroContainer>
//     <BackgroundVideo autoPlay loop muted>
//       <source src={heroVideo} type="video/mp4"/>
//     </BackgroundVideo>
//     <Header />
//     <TextContainer>
//       <h1>Revolutionizing Spectral Analysis with AI</h1>
//       <p>Welcome to a world of precision, efficiency, and innovation.</p>
//     </TextContainer>
//     <BottomImage src="path-to-your-vertical-image.png" alt="Vertical Image"/>
//   </HeroContainer>
// );
export default Hero;