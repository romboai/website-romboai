import React from 'react';
import styles from "./Product.module.css";
import DynamicSeparator from "./reusable-components/DynamicSeparator";
import subdivide from "../img/Subdivide_line.svg";
import vector3 from "../img/Vector3.svg";

const Product = () => {


  return (
    <div className={styles.productContainer}>
      <h1>Dynamic Separator Example</h1>
      <DynamicSeparator
        subdivideSrc={subdivide}
        vectorSrc={vector3}
        position="bottom"/>
    </div>
  );
}

export default Product;