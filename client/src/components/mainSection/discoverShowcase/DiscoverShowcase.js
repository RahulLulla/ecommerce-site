import React, { useEffect, useState } from "react";
import styles from "./DiscoverShowcase.module.css";
import DiscoverItemShowcase from "../discoverItemShowcase/DiscoverItemShowcase";
import { fetch_discover_products } from "./fetch_discover_products_requests";

const DiscoverShowcase = () => {
  const [discover_products, setDiscoverProducts] = useState([]);
  const elements = discover_products.map((product, index) => {
    return (
      <DiscoverItemShowcase
        product={product}
        index={index}
        key={product.productName}
      />
    );
  });

  useEffect(() => {
    fetch_discover_products()
      .then((data) => setDiscoverProducts(data))
      .catch((error) => {
        console.error("Error fetching trending categories:", error);
      });
  }, []);

  return (
    <div className={styles.discover_content}>
      <h1 className={styles.content_title}>Discover More</h1>
      <div className={styles.container}>{elements}</div>
    </div>
  );
};

export default DiscoverShowcase;
