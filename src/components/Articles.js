import React from 'react';
import styles from './Articles.module.css';
import divider from '../img/divider-2.svg';
import pexelsPhoto1 from '../img/https-www-pexels-com-photo-two-women-in-front-of-dry-erase-boa-2.png';
import pexelsPhoto2 from '../img/https-www-pexels-com-photo-photo-of-people-doing-handshakes-31-2.png';
import pexelsPhoto3 from '../img/https-www-pexels-com-photo-photo-of-woman-looking-at-man-31831-2.png';
import separator9 from '../img/separator-9.png';
import manipolo from '../img/manipolo.svg';
import separator10 from '../img/separator-10.png';
import image10 from '../img/image-2-3.png';
import image11 from '../img/image-4-2.png';
import image12 from '../img/image-5-2.png';
import image13 from '../img/image-6-2.png';
import image14 from '../img/image-3-2.png';
import Separator from "./Separator";
import separatorImage from "../img/separator-10.png";
import HorizontalListView from "./reusable-components/HorizontalListView";


const items = [
  {
    imageSrc: pexelsPhoto1,
    description: 'Consolidates multiple testing apparatuses into a single, efficient unit, significantly cutting down on equipment expenses and maintenance needs.',
    title: 'All-In-One Analysis Suite',
    date: 'Aug 23, 2023'
  },
  {
    imageSrc: pexelsPhoto2,
    description: 'Reduce the manual intervention of specialized personnel. Daily laboratory tasks reduced.',
    title: 'Fully Automatic Measure',
    date: 'Sep 2, 2023'
  },
  {
    imageSrc: pexelsPhoto3,
    description: 'Reduce the manual intervention of specialized personnel. Daily laboratory tasks reduced.',
    title: 'Fully Automatic Measure',
    date: 'Sep 2, 2023'
  },
  // Add more items as needed
];

function Articles() {
  return (
    <section className={styles.articles}>
      <div className={styles.textWrapper27}>What to read next</div>
      <HorizontalListView items={items} />
      <img className={styles.divider3} src={divider} alt="Divider"/>
      <img className={styles.manipolo} src={manipolo} alt="Manipolo"/>
      <Separator src={separatorImage} alt="Separator" className={styles.separator}/> {/* Add class for positioning */}
      {/*<div className={styles.overlap11}>*/}
      {/*  <div className={styles.item6}>*/}
      {/*    <div className={styles.post4}>*/}
      {/*      <p className={styles.textWrapper22}>*/}
      {/*        Consolidates multiple testing apparatuses into a single, efficient unit, significantly cutting down on*/}
      {/*        equipment expenses and maintenance needs.*/}
      {/*      </p>*/}
      {/*      <div className={styles.textWrapper23}>All-In-One Analysis Suite</div>*/}
      {/*      <div className={styles.textWrapper24}>Aug 23, 2023</div>*/}
      {/*    </div>*/}
      {/*    <img className={styles.pexelsPhoto} src={pexelsPhoto1} alt="Article 1"/>*/}
      {/*  </div>*/}
      {/*  <div className={styles.item7}>*/}
      {/*    <div className={styles.post5}>*/}
      {/*      <div className={styles.textWrapper23}>Fully Automatic Measurement</div>*/}
      {/*      <div className={styles.textWrapper25}>Sep 2, 2023</div>*/}
      {/*      <p className={styles.textWrapper22}>*/}
      {/*        Reduce the manual intervention of specialised personnel. Daily laboratory tasks reduced by 90%.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <img className={styles.pexelsPhoto} src={pexelsPhoto2} alt="Article 2"/>*/}
      {/*  </div>*/}
      {/*  <div className={styles.item8}>*/}
      {/*    <div className={styles.post4}>*/}
      {/*      <div className={styles.textWrapper23}>Express Quality Analysis</div>*/}
      {/*      <div className={styles.textWrapper26}>Feb 12, 2024</div>*/}
      {/*      <p className={styles.textWrapper22}>*/}
      {/*        Perform analysis/get full report in minutes. Streamline crude oil management by compressing idle times*/}
      {/*        and removing bottlenecks.*/}
      {/*      </p>*/}
      {/*    </div>*/}
      {/*    <img className={styles.pexelsPhoto} src={pexelsPhoto3} alt="Article 3"/>*/}
      {/*  </div>*/}
      {/*  <div className={styles.textWrapper27}>What to read next</div>*/}
      {/*  <div className={styles.group13}>*/}
      {/*    <img className={styles.divider3} src={divider} alt="Divider"/>*/}
      {/*  </div>*/}
      {/*  <img className={styles.manipolo} src={manipolo} alt="Manipolo"/>*/}
      {/*</div>*/}
    </section>
  );
}

export default Articles;