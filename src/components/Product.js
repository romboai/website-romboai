import React from 'react';
import styles from "./Product.module.css";
import HeroProduct from "./HeroProduct";
import ProductSection from "./ProductSection";
import ProductSectionOne from "./ProductSectionOne";
import ProductSectionTwo from "./ProductSectionTwo";

const Product = () => {


  return (
    <div className={styles.container}>
      <HeroProduct/>
      <ProductSection/>
      <ProductSectionOne/>
      <ProductSectionTwo/>
    </div>
  );
}

export default Product;