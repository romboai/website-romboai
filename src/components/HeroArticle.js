import React from 'react';
import styles from './HeroArticle.module.css';
import Separator from "./Separator";
import separatorImage from "../img/separator-11.png";
import heroImage from "../img/imageHero.png";


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
        <div className={styles.blogBodyContent}>
          <div className={styles.eiusmod}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </div>
          <div className={styles.eiusmod2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </div>
          <div className={styles.eiusmod3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </div>
          <div className={styles.quisqueNon}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
            at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
            egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </div>
          <div className={styles.quisqueNon2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
            at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
            egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </div>
          <div className={styles.quisqueNon3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
            at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
            egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </div>
          <div className={styles.list}>
            <div className={styles.sitAmet}>Lorem ipsum dolor sit amet</div>
            <div className={styles.pointer}></div>
          </div>
          <div className={styles.list2}>
            <div className={styles.scelerisque}>
              Non blandit massa enim nec scelerisque
            </div>
            <div className={styles.pointer2}></div>
          </div>
          <div className={styles.list}>
            <div className={styles.egestas}>
              Neque egestas congue quisque egestas
            </div>
            <div className={styles.pointer3}></div>
          </div>
          <div className={styles.quisqueNon4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
            at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
            egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </div>
          <div
            className={styles.quisqueNon5}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim
            nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing
            at in tellus. Sociis natoque penatibus et magnis dis parturient montes.
            Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque
            egestas diam. Risus in hendrerit gravida rutrum quisque non.
          </div>

          <div className={styles.andrewJonson}>Andrew Jonson</div>
        </div>
      </div>
      <Separator src={separatorImage} className={styles.separator} alt="Separator"/> {/* Add class for positioning */}
    </div>
  );
}

export default HeroArticle;