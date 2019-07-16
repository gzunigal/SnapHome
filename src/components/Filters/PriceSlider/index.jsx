import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { formatPrice } from "utils/price";

import styles from "./index.module.css";

const MySlider = Slider.createSliderWithTooltip(Slider);

// debug utility
function log(value) {
  console.log({
    value,
    curvedValue: sliderCurve(value)
  });
}

// change these to whatever curve function you need!
const sliderCurve = Math.exp;
const inverseCurve = Math.log;

export default function PriceSlider({ min = 0, max = 100 }) {
  return (
    <div className={styles.priceSlider}>
      <MySlider
        min={inverseCurve(min)}
        max={inverseCurve(max)}
        marks={{
          [inverseCurve(min)]: formatPrice(min),
          [inverseCurve(max)]: formatPrice(max)
        }}
        step={(inverseCurve(max) - inverseCurve(min)) / 100} // 100 steps in range
        tipFormatter={value => formatPrice(sliderCurve(value))}
        onChange={log}
      />
    </div>
  );
}
