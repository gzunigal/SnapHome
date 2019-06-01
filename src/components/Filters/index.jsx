import React, { useState } from "react";
import Price from "./Price";
import Slider from "./Slider";
import PriceGraph from "components/PriceGraph";
import SelectMarca from "./SelectMarca";

const Filters = ({ props }) => {
  const [priceState, setPriceState] = useState({ min: 0, max: 2000000 });
  return (
    <div className="row">
      <div className="col-10">
        <div className="row">Precio</div>
        <div className="row">
          <input type="text" placeholder="Mínimo" /> -
          <input type="text" placeholder="Máximo" />
        </div>
        Marca
        <SelectMarca />
      </div>
    </div>
  );
};

export default Filters;
