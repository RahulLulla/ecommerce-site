/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProductCard.module.css";
import { formatRupee } from "../../../utils/formatRupee";
import { Link } from "react-router-dom";

const ProductCard = ({ product, isElementVisible }) => {
  const visibilityStyle = isElementVisible ? styles.appear : styles.disappear;

  return (
    <Link
      to="/product_details"
      style={{ textDecoration: "none" }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className={`${styles.product_card} ${visibilityStyle}`}>
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
    </Link>
  );
};

export default ProductCard;
