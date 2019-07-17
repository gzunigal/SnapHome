import React, { useState } from "react";
import Navbar from "components/Navbar";
import Categories from "components/Categories";
import ProductCards from "components/ProductCards";
import Filters from "components/Filters";

import productsData from "data.json";

const Catalogo = () => {
  const [filter, setFilter] = useState(false);
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div
          className={
            filter
              ? "col-2 justify-content-center"
              : "col-1 justify-content-center"
          }
        >
          <button
            class="btn btn-outline-info "
            style={{ marginTop: 20 + "px" }}
            onClick={() => {
              setFilter(!filter);
            }}
          >
            {filter ? "<<" : ">>"} Filtros
          </button>
          {filter && <Filters />}
        </div>
        <div className="col">
          <ProductCards products={productsData} />
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
