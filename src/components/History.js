import React from 'react';
import styles from './History.module.css';

import heroVideo from "../img/hero_back_play.mp4";

function History() {
  return (
    <section className={styles.history}>

      <div className={styles.containerHistory}>
        <video autoPlay muted loop className={styles.historyVideo}>
          <source src={heroVideo} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div className={styles.mask}></div>
        <div className={styles.section}>
          <div className={styles.caption}>History</div>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <div className={styles.secondaryHeadline}>Timeline</div>
            </div>
            <div className={styles.paragraph}>
              The journey of Rombo AI began when our founders recognized the untapped
              potential of combining AI with spectral analysis.
              <br/>
              Fueled by a passion for technology and a commitment to excellence, we
              embarked on a mission to develop solutions that would not only address
              current analytical challenges but also anticipate future needs.
              <br/>
              Today, Rombo AI is a trusted partner to companies worldwide, celebrated
              for our cutting-edge technology, unparalleled expertise, and unwavering
              support.
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.caption}>The Team</div>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <div className={styles.secondaryHeadline}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br />
                Bibendum amet at molestie mattis.</div>
            </div>
            <div className={styles.paragraph}>
              <p>
                <span className={styles.vision}>{`CEO/Founder: `}</span>
                <span>Il fondatore della startup, responsabile della visione, della strategia aziendale e della
                gestione generale della società. Deve avere una conoscenza approfondita del settore e una solida
                  comprensione dei mercati di riferimento.</span>
                <br/>
                <br/>
                <span className={styles.vision}>{`CTO (Chief Technology Officer): `}</span>
                <span> delle decisioni tecnologiche fondamentali e della
                supervisione del team di sviluppo. Deve avere una solida esperienza nell'intelligenza artificiale,
                nell'apprendimento automatico e nell'analisi dei dati, nonché competenze nella gestione dei progetti e
                delle risorse tecniche. Data Scientist: Esperto nell'analisi dei dati e nello sviluppo di modelli
                predittivi per l'interpretazione dei dati chimici. Utilizza tecniche di machine learning e statistica
                per
                estrarre informazioni significative dai dati, identificare modelli e sviluppare algoritmi di
                intelligenza
                artificiale.</span>
                <br/>
                <br/>
                <span className={styles.vision}>{`Ingegnere del software: `}</span>
                <span> della progettazione, dello sviluppo e della manutenzione del
                software
                per l'analisi dei dati. Deve avere competenze nella programmazione e nello sviluppo di applicazioni
                software, nonché familiarità con le tecnologie utilizzate nel settore dell'intelligenza artificiale e
                dell'analisi dei dati.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;