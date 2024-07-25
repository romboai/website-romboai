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
import HeroSolution from "./components/HeroSolution";
import SolutionSection from "./components/SolutionSection";
import SolutionSection1 from "./components/SolutionSection1";
import SolutionSection2 from "./components/SolutionSection2";
import ContactInfoMap from "./components/ContactInfoMap";
import DynamicSeparator from "./components/reusable-components/DynamicSeparator";
import subdivide from "./img/Subdivide_line.svg";
import vector2 from './img/Vector2.svg';
import vector3 from './img/Vector3.svg'
import Solution from "./components/Solution";
// import Contact from "./components/Contact";

const App = () => {
  const [activeContent, setActiveContent] = useState('home');

  const handleMenuClick = (content) => {
    setActiveContent(content);
  };

  return (
    <div className={styles.container}>
      <Header onMenuClick={handleMenuClick} className={styles.header}/>
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
          <SupportedBy/>
          <Product/>
          <Engage/>
        </>
      )}
      {/*{activeContent === 'technologies' && <Technologies />}*/}
      {/*{activeContent === 'clients' && <Clients />}*/}
      {/*{activeContent === 'articles' && <Articles />}*/}
      {/*{activeContent === 'supportedby' && <SupportedBy />}*/}
      {/*{activeContent === 'engage' && <Engage />}*/}
      <Footer/>
    </div>
  );
};

export default App;
