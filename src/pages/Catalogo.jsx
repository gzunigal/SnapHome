import React from "react";
import Navbar from "components/Navbar";
import Categories from "components/Categories";
import ProductCards from "components/ProductCards";
import Filters from "components/Filters";

import productsData from "data.json";

const Catalogo = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <Filters />
        <div className="col">
          <ProductCards products={productsData} />
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
