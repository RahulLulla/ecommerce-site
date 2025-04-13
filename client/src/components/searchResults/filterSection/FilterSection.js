/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import styles from "./FilterSection.module.css";
import FilterOptions from "../filterOptions/FilterOptions";
import FilterPriceRange from "../filterPriceRange/FilterPriceRange";

const FilterSection = ({ filter, filteredProducts, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([]);
  const [materialOptions, setMaterialOptions] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);

  useEffect(() => {
    if (filteredProducts.length === 0) return;

    if (priceRange.length === 0) {
      const prices = filteredProducts.map((product) => product.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, maxPrice]);

      onFilterChange((prev) => ({
        ...prev,
        price: [minPrice, maxPrice],
      }));
    }

    const materials = filteredProducts.map((product) => product.material);
    const uniqueMaterials = [...new Set(materials)];
    setMaterialOptions(uniqueMaterials.sort((a, b) => a.localeCompare(b)));

    const colors = filteredProducts.map((product) => product.color);
    const uniqueColors = [...new Set(colors)];
    setColorOptions(uniqueColors.sort((a, b) => a.localeCompare(b)));
  }, [filteredProducts, onFilterChange, priceRange.length]);

  const handlePriceChange = (value) => {
    onFilterChange((prev) => ({
      ...prev,
      price: value,
    }));
  };

  const handleMaterialChange = (value) => {
    onFilterChange((prev) => ({
      ...prev,
      materials: prev.materials.includes(value)
        ? prev.materials.filter((m) => m !== value)
        : [...prev.materials, value],
    }));
  };

  const handleColorChange = (value) => {
    onFilterChange((prev) => ({
      ...prev,
      colors: prev.colors.includes(value)
        ? prev.colors.filter((c) => c !== value)
        : [...prev.colors, value],
    }));
  };

  return (
    <div className={styles.filter_content}>
      <FilterPriceRange
        filterTitle={"Price"}
        price={filter.price}
        priceRange={priceRange}
        handleOptionChange={handlePriceChange}
      />
      <FilterOptions
        filterTitle={"Material"}
        optionsArray={materialOptions}
        handleOptionChange={handleMaterialChange}
        checkCondition={(option) => filter.materials.includes(option)}
      />
      <FilterOptions
        filterTitle={"Colour"}
        optionsArray={colorOptions}
        handleOptionChange={handleColorChange}
        checkCondition={(option) => filter.colors.includes(option)}
      />
    </div>
  );
};

export default FilterSection;
