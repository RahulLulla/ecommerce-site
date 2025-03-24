/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProductItem.module.css";
import { formatRupee } from "../../../utils/formatRupee";

const ProductItem = ({ product }) => {
  return (
    <div className={styles.product_card}>
      <span className={styles.product_image_content}>
        <img
          className={styles.product_image}
          src={product.url}
          alt={product.productName}
        />
      </span>
      <div className={styles.product_details}>
        <h3 className={styles.product_name}>{product.productName}</h3>
        <h3 className={styles.product_price}>
          MRP {formatRupee(product.price)}
        </h3>
      </div>
    </div>
  );
};

export default ProductItem;
