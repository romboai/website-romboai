import React from 'react';
import styles from './Articles.module.css';
import divider from '../img/divider-2.svg';
import pexelsPhoto1 from '../img/https-www-pexels-com-photo-two-women-in-front-of-dry-erase-boa-2.png';
import pexelsPhoto2 from '../img/https-www-pexels-com-photo-photo-of-people-doing-handshakes-31-2.png';
import pexelsPhoto3 from '../img/https-www-pexels-com-photo-photo-of-woman-looking-at-man-31831-2.png';
import manipolo from '../img/manipolo.svg';
import HorizontalListView from "./reusable-components/HorizontalListView";
import subdivide from "../img/Subdivide_line.svg";
import vector1 from "../img/Vector5.svg";


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
      <HorizontalListView items={items}/>

      <img className={styles.divider3} src={divider} alt="Divider"/>
      <img className={styles.manipolo} src={manipolo} alt="Manipolo"/>

      {/*<Separator src={separatorImage} alt="Separator" className={styles.separator}/> /!* Add class for positioning *!/*/
      }
      <div className={styles.separator}>
        <img className={styles.subdivideLine1} alt="" src={subdivide}/>
        <img className={styles.vector1} alt="" src={vector1}/>
      </div>
    </section>
  )
    ;
}

export default Articles;