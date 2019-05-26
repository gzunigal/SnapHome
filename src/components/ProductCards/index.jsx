import React from "react";
import ProductCard from "./ProductCard";

import styles from "./index.module.css";

const ProductCards = () => {
  return (
    <div className={styles.container}>
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
      <ProductCard priceNew={20000} priceFrom={9000} />
    </div>
  );
};
export default ProductCards;
