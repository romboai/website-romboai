import React, {useState} from 'react';
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
import Contact from "./components/Contact";
import About from "./components/About";
import Product from "./components/Product";
import Solution from "./components/Solution";
import Blog from "./components/Blog";
import Article from "./components/Article";
// import Contact from "./components/Contact";

const App = () => {

  const [isResource1Selected, setIsResource1Selected] = useState(false);

  const [activeContent, setActiveContent] = useState('home');

  const handleMenuClick = (content) => {
    setActiveContent(content);
    if (content === 'resource2') {
      setIsResource1Selected(true);
    } else {
      setIsResource1Selected(false);
    }
  };

  return (
    <div className={styles.container}>
      <Header
        onMenuClick={handleMenuClick}
        className={`${styles.header} ${isResource1Selected ? styles.resource1Background : ''}`}
      />
      {activeContent === 'home' && (
        <>
          <Hero additionalProp="Home"/>
          <Intro/>
          <Technologies/>
          <Clients/>
          <Articles/>
          <SupportedBy/>
          <Engage/>
        </>
      )}
      {activeContent === 'contactus' && (
        <>
          <Contact/>
        </>
      )}
      {activeContent === 'aboutus' && (
        <>
          <About/>
          <SupportedBy/>
          <Engage/>
        </>
      )}
      {activeContent === 'solutions' && (
        <>
          <Solution/>
          <SupportedBy/>
          <Engage/>
        </>
      )}
      {activeContent === 'product1' && (
        <>
          <Product/>
          <Articles/>
          <SupportedBy/>
          <Engage/>
        </>
      )}
      {activeContent === 'resource1' && (
        <>
          <Blog/>
          <SupportedBy/>
          <Engage/>
        </>
      )}
      {activeContent === 'resource2' && (
        <>
          <Article/>
          <Articles/>
          <SupportedBy/>
          <Engage/>
        </>
      )}
      <Footer/>
    </div>
  );
};

export default App;
