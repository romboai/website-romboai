import React from 'react';
import './globals.module.css';
import './styleguide.module.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Clients from './components/Clients';
import Engage from './components/Engage';
import Hero from './components/Hero';
import SupportedBy from './components/SupportedBy';
import styles from './App.module.css';
import Intro from "./components/Intro";
import Technologies from "./components/Technologies";
import Separator from "./components/Separator";
import separatorImage from "./img/separator-10.png";

const App = () => {
  return (
    <div className={styles.container}>
      {/*<Header />*/}
      <Hero />
      <Intro/>
      <Technologies />
      <Clients />
      <Articles />
      <SupportedBy />
      <Engage />
      <Footer />
    </div>
  );
};

export default App;