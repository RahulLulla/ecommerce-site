/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./CuratedProducts.module.css";
import CuratedProductItems from "../curatedProductItems/CuratedProductItems";

const CuratedProducts = ({ featured, bestSellers, newArrivals }) => {
  const options = ["Best Sellers", "Featured", "New Arrivals"];
  const [navOption, setNavOption] = useState(0);
  const [suggestions, setSuggestions] = useState(bestSellers);

  const handleNavOptions = (index) => {
    setNavOption(index);
    if (index === 0) setSuggestions(bestSellers);
    else if (index === 1) setSuggestions(featured);
    else setSuggestions(newArrivals);
  };

  const navigationOptions = options.map((option, index) => {
    const focusStyle = navOption === index ? styles.featured_title_focus : "";
    return (
      <span
        key={option}
        className={`${styles.nav_title} ${focusStyle}`}
        onClick={() => handleNavOptions(index)}
      >
        <h1>{option}</h1>
      </span>
    );
  });

  return (
    <>
      <div className={styles.nav_title_container}>{navigationOptions}</div>
      <CuratedProductItems suggestions={suggestions} />
    </>
  );
};

export default CuratedProducts;
