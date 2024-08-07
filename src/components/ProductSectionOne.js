import React from 'react';
import styles from './ProductSectionOne.module.css';
function ProductSectionOne() {
  return (
    <div className={styles.section}>
      <div className={styles.sectionText}>
        <div className={styles.top}>
          <div className={styles.caption}>Validations</div>
          <div className={styles.secondaryHeadline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br/>
            Bibendum amet at molestie mattis.
          </div>
        </div>
        <div className={styles.paragraph}>
          Rhoncus morbi et augue nec, in id ullamcorper at sit. Condimentum sit nunc
          in eros scelerisque sed. Commodo in viverra nunc, ullamcorper ut. Non,
          amet, aliquet scelerisque nullam sagittis, pulvinar. Fermentum scelerisque
          sit consectetur hac mi. Mollis leo eleifend ultricies purus iaculis.
        </div>
      </div>
    </div>
  );
}

export default ProductSectionOne;