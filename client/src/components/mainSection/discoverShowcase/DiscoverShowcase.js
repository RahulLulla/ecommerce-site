import React from "react";
import styles from "./DiscoverShowcase.module.css";
import { discover_products } from "../../../constants/suggestions";
import DiscoverItemShowcase from "../discoverItemShowcase/DiscoverItemShowcase";

const DiscoverShowcase = () => {
  const elements = discover_products.map((product, index) => {
    return (
      <DiscoverItemShowcase
        product={product}
        index={index}
        key={product.productName}
      />
    );
  });

  return (
    <div className={styles.discover_content}>
      <h1 className={styles.content_title}>Discover More</h1>
      <div className={styles.container}>{elements}</div>
    </div>
  );
};

export default DiscoverShowcase;
