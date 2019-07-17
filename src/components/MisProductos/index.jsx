import React from "react";
import ProductCard from "components/ProductCards/ProductCard";

import styles from "./index.module.css";

import productsData from "data.json";

const MisProductos = () => {
  return (
    <div className="componente row">
      <div className="col-10 offset-1">
        <br />
        <div className="row">
          <h1 className="col-12 text-center">Casa Principal</h1>
          <hr className="col-8 offset-2" />
          <div className={`col-12 ${styles.grid}`}>
            <ProductCard product={productsData[1]} adquirido />
            <ProductCard product={productsData[4]} adquirido />
            <ProductCard product={productsData[10]} adquirido />
            <ProductCard product={productsData[3]} adquirido />
            <ProductCard product={productsData[12]} adquirido />
            <ProductCard product={productsData[6]} adquirido />
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <h1 className="col-12 text-center">Casa Sergio</h1>
          <hr className="col-8 offset-2" />
          <div className={`col-12 ${styles.grid}`}>
            <ProductCard product={productsData[14]} adquirido />
            <ProductCard product={productsData[5]} adquirido />
            <ProductCard product={productsData[11]} adquirido />
            <ProductCard product={productsData[2]} adquirido />
            <ProductCard product={productsData[9]} adquirido />
            <ProductCard product={productsData[13]} adquirido />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default MisProductos;
