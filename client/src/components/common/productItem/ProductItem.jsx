import React from "react";
import styles from "./ProductItem.module.css";
import { formatRupee } from "@/utils/formatRupee";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { mainCategory, gender, subCategory, productId } = product;
  return (
    <Link
      to={`/products/${mainCategory}/${gender}/${subCategory}/${productId}`}
      style={{ textDecoration: "none" }}
      onClick={() => window.scrollTo(0, 0)}
    >
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
    </Link>
  );
};

export default ProductItem;
