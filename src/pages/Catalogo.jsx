import React from "react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import ProductCards from "../components/ProductCards";

const Catalogo = () => (
  <div className="Catalogo">
    <Navbar />
    <Categories />
    <ProductCards />
  </div>
);

export default Catalogo;
