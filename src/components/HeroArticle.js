import React from 'react';
import styles from './HeroArticle.module.css';
import heroImage from "../img/imageHero.png";
import Separator from "./Separator";
import separatorImage from "../img/Subdivide_line.svg";
import subdivide from "../img/Subdivide_line.svg";
import vector1 from "../img/Vector4.svg";

function HeroArticle() {
  return (
    <div className={styles.hero}>
      <div className={styles.containerOne}>
        <div className={styles.posted}>Posted on 27th January 2022</div>
        <div className={styles.step}>
          Step-by-step guide to choosing great font pairs
        </div>
      </div>
      <div className={styles.containerTwo}>
        <img className={styles.imageVideo} alt="" src={heroImage}/>
      </div>
      <div className={styles.containerThree}>
        <div className={styles.posted1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
        <div className={styles.step1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
          ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </div>
      </div>

      <div className={styles.containerThree}>
        <div className={styles.posted1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
        <div className={styles.step1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
          ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </div>
        <div className={styles.step1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
          ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </div>
        <div className={styles.paragraph1}>
          <ul className={styles.list}>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Non blandit massa enim nec scelerisque</li>
            <li>Neque egestas congue quisque egestas</li>
          </ul>
        </div>
        <div className={styles.step1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
          ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </div>
      </div>
      <div className={styles.containerThree}>
        <div className={styles.posted1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</div>
        <div className={styles.step1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra
          adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae
          ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
        </div>
      </div>
      <div className={styles.andrewJonson}>Andrew Jonson</div>
      <div className={styles.divider}>
      </div>
      <img className={styles.subdivideLine1} alt="" src={subdivide}/>
      <img className={styles.vector1} alt="" src={vector1}/>
      {/*<Separator src={separatorImage} className={styles.separator} alt="Separator"/> /!* Add class for positioning *!/*/}
    </div>
  );
}

export default HeroArticle;