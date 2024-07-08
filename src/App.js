import React, { useEffect } from 'react';
import './App.css';
import './globals.css';
import './styleguide.css'
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Technology from './components/Technology';
import Clients from './components/Clients';
import Articles from './components/Articles';
import SupportedBy from './components/SupportedBy';
import Engage from './components/Engage';
import Footer from './components/Footer';
import useWindowSize from './hooks/useWindowSize';

function App() {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('visible');
    });
  }, []);
  const { width } = useWindowSize();
  console.log(width)
  return (
    <div className={`App ${width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop'}`}>
      <Hero/>
      <Intro />
      <Technology />
      {/*<Clients />*/}
      {/*<Articles />*/}
      {/*<SupportedBy />*/}
      {/*<Engage />*/}
      <Footer />
    </div>
  );
}

export default App;