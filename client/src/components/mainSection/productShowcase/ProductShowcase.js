/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./ProductShowcase.module.css";
import ProductItemsShowcase from "../../common/productItemsShowcase/ProductItemsShowcase";

const ProductShowcase = ({ featured, bestSellers, newArrivals }) => {
  const options = ["Best Sellers", "Featured", "New Arrivals"];
  const [navOption, setNavOption] = useState(0);
  const [products, setProducts] = useState(bestSellers);

  const handleNavOptions = (index) => {
    setNavOption(index);
    if (index === 0) setProducts(bestSellers);
    else if (index === 1) setProducts(featured);
    else setProducts(newArrivals);
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
      <div className={styles.product_items_container}>
        <ProductItemsShowcase products={products} />
      </div>
    </>
  );
};

export default ProductShowcase;
