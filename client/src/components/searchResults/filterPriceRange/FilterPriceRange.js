/* eslint-disable react/prop-types */
import React from "react";
import styles from "./FilterPriceRange.module.css";
import { Slider } from "@mui/material";
import { sliderStyle } from "./FilterPriceRangeStyle";

const FilterPriceRange = ({
  filterTitle,
  price,
  priceRange,
  handleOptionChange,
}) => {
  const handleChange = (_, newValue) => {
    if (newValue[1] - newValue[0] < 50) {
      return;
    }
    handleOptionChange(newValue);
  };

  return (
    <div className={styles.filter_container}>
      <hr className={styles.filter_line} />
      <h4 className={styles.filter_title}>{filterTitle}</h4>
      <Slider
        sx={sliderStyle}
        getAriaLabel={() => "Price range"}
        value={price}
        onChange={handleChange}
        min={priceRange[0]}
        max={priceRange[1]}
      />
      <h1>
        From
        <div className={styles.price_value}>
          <input
            disabled={true}
            className={styles.input_box_left}
            value={price[0]}
          />
        </div>
        to
        <div className={styles.price_value}>
          <input
            disabled={true}
            className={styles.input_box_right}
            value={price[1]}
          />
        </div>
      </h1>
    </div>
  );
};

export default FilterPriceRange;
