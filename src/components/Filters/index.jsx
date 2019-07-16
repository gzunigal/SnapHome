import React, { useState } from "react";
import { Button } from "reactstrap";
import Price from "./Price";
import Slider from "./Slider";
import PriceGraph from "components/PriceGraph";
import SelectMarca from "./SelectMarca";
import PriceSlider from "./PriceSlider";

import styles from "./index.module.css";
import SelectConectividad from "./SelectConectividad";

const Filters = ({ props }) => {
  const [priceState, setPriceState] = useState({ min: 0, max: 2000000 });
  return (
    <div className={`${styles.component}`}>
      <h4>Filtros</h4>
      <div className="col-12">
        <Price min={500} max={28000} />
        <SelectMarca />
        <SelectConectividad />
        <br/>
        <div className={styles.centered}>
        <Button className={``} color="info">
          Filtrar
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
