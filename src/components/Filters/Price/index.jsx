import React from "react";
import InputRange from "react-input-range";
import { formatPrice } from "utils/price";

import "react-input-range/lib/css/index.css";

const Price = props => {
  return (
    <div className="row">
      <div className="precio col-9 offset-1">
        <InputRange
          maxValue={props.maxValue}
          minValue={props.minValue}
          formatLabel={value => formatPrice(value)}
          value={props.priceRange}
          onChange={value => props.onChange(value)}
        />
      </div>
    </div>
  );
};

export default Price;
