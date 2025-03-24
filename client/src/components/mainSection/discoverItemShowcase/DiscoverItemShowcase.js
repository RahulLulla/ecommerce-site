/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./DiscoverItemShowcase.module.css";

const DiscoverItemShowcase = ({ product, index }) => {
  const [show, setShow] = useState(false);

  const optionElements = show ? (
    <div className={styles.category_options}>
      <div className={styles.category_option}>
        <h3 className={styles.category_option_title}>SHOP WOMEN</h3>
      </div>
      <div className={styles.category_option}>
        <h3 className={styles.category_option_title}>SHOP MEN</h3>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div
      className={`${styles.container_item} ${index === 0 ? styles.item1 : ""}`}
      alt={product.productName}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <img
        src={product.url}
        className={`${styles.discover_image} ${
          show ? styles.discover_image_hover : ""
        }`}
      />
      {optionElements}
    </div>
  );
};
export default DiscoverItemShowcase;
