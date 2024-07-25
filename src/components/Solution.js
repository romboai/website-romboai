import React from 'react';
import styles from './Solution.module.css';
import HeroSolution from "./HeroSolution";
import SolutionSection from "./SolutionSection";
import SolutionSection1 from "./SolutionSection1";
import SolutionSection2 from "./SolutionSection2";
import ContactInfoMap from "./ContactInfoMap";
import DynamicSeparator from "./reusable-components/DynamicSeparator";
import subdivide from "../img/Subdivide_line.svg";
import vector3 from "../img/Vector3.svg";

function Solution() {
  return (
    <div className={styles.container}>
      <HeroSolution/>
      <SolutionSection/>
      <SolutionSection1/>

      <SolutionSection2/>

      <ContactInfoMap/>
    </div>
  );
}
export default Solution;