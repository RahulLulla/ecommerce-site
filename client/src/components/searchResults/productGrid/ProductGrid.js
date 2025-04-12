/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProductGrid.module.css";
import ProductItem from "../../common/productItem/ProductItem";

const ProductGrid = ({ products }) => {
  console.log("Rerendering ProductGrid with products:", products);

  const productItems = products.map((product, i) => (
    <ProductItem key={"product" + i} product={product} />
  ));

  return <div className={styles.product_grid}>{productItems}</div>;
};

export default ProductGrid;
