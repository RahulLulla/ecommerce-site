/* eslint-disable react/prop-types */

import React, { useState } from "react";
import styles from "./FilterSection.module.css";
import FilterOptions from "../filterOptions/FilterOptions";
import FilterPriceRange from "../filterPriceRange/FilterPriceRange";

const FilterSection = ({ onFilterChange }) => {
  const priceRange = [0, 1000];
  const materialOptions = ["Cotton", "Leather", "Denim", "Polyester"];
  const colorOptions = ["Red", "Blue", "Green", "Black", "White"];

  const [price, setPrice] = useState(priceRange);
  const [materials, setMaterials] = useState([]);
  const [colors, setColors] = useState([]);

  const handlePriceChange = (value) => {
    setPrice(value);
    onFilterChange((prev) => ({
      ...prev,
      price: value,
    }));
  };

  const handleMaterialChange = (value) => {
    setMaterials((prev) =>
      prev.includes(value) ? prev.filter((m) => m !== value) : [...prev, value]
    );
    onFilterChange((prev) => ({
      ...prev,
      materials: prev.materials.includes(value)
        ? materials.filter((m) => m !== value)
        : [...materials, value],
    }));
  };

  const handleColorChange = (value) => {
    setColors((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
    onFilterChange((prev) => ({
      ...prev,
      colors: prev.colors.includes(value)
        ? colors.filter((c) => c !== value)
        : [...colors, value],
    }));
  };

  return (
    <div className={styles.filter_content}>
      <FilterPriceRange
        filterTitle={"Price"}
        price={price}
        priceRange={priceRange}
        handleOptionChange={handlePriceChange}
      />
      <FilterOptions
        filterTitle={"Material"}
        optionsArray={materialOptions}
        handleOptionChange={handleMaterialChange}
        checkCondition={(option) => materials.includes(option)}
      />
      <FilterOptions
        filterTitle={"Colour"}
        optionsArray={colorOptions}
        handleOptionChange={handleColorChange}
        checkCondition={(option) => colors.includes(option)}
      />
    </div>
  );
};

export default FilterSection;
