import React from "react";
import Navbar from "components/Navbar";

import productsData from "data.json";
import ProductDetail from "components/ProductDetail";

const Producto = ({ match }) => {
  let product = productsData.filter(
    prod => prod.id === parseInt(match.params.id)
  )[0];

  return (
    <div className="container-fuild">
      <Navbar />
      <ProductDetail product={product} />
    </div>
  );
};

export default Producto;
