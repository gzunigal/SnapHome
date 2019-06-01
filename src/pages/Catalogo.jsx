import React from "react";
import Navbar from "components/Navbar";
import Categories from "components/Categories";
import ProductCards from "components/ProductCards";
import Filters from "components/Filters";

const Catalogo = () => (
  <div className="container-fuild">
    <Navbar />
    <Categories />
    <div className="row">
      <div className="col-md-9">
        <ProductCards />
      </div>
      <div className="col-md-2">
        <Filters />
      </div>
    </div>
  </div>
);

export default Catalogo;
