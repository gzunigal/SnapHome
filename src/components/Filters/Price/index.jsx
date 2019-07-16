import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/lab/Slider";
import Tooltip from "@material-ui/core/Tooltip";

import { formatPrice } from "utils/price";

import styles from "./index.module.css";

function valuetext(value) {
  return `${formatPrice(value)}`;
}

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={valuetext(value)}
    >
      {children}
    </Tooltip>
  );
}

export default function Price({ min = 0, max = 100 }) {
  const [value, setValue] = React.useState([min, max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.priceSlider}>
      <Typography id="range-slider" gutterBottom>
        Precio
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelFormat={valuetext}
        ValueLabelComponent={ValueLabelComponent}
        min={min}
        max={max}
      />
    </div>
  );
}
