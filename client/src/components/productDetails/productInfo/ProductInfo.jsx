import React from "react";
import styles from "./ProductInfo.module.css";
import { formatRupee } from "@/utils/formatRupee";
import ProductSpecs from "../productSpecs/ProductSpecs";
import Button from "@mui/material/Button";
import { addtoCartStyle, buyNowStyle } from "./ProductInfoStyle";
import { useSelector } from "react-redux";
import { getCurrentProduct } from "@/features/currentProduct/currentProductSlice";

const ProductInfo = () => {
  const product = useSelector(getCurrentProduct);

  return (
    <div className={styles.product_info_content}>
      <div>
        <h1 className={styles.product_info_title}>{product.productTitle}</h1>
      </div>
      <div className={styles.product_info_desc_box}>
        <h2 className={styles.product_info_desc}>
          {product.productDescription}
        </h2>
      </div>
      <div className={styles.product_info_desc_box}>
        <h2 className={styles.product_info_price}>
          MRP ${formatRupee(product.productPrice)}
        </h2>
      </div>
      <div className={styles.product_info_purchase_box}>
        <Button variant="contained" sx={addtoCartStyle}>
          Add to Cart
        </Button>
        <Button variant="contained" sx={buyNowStyle}>
          Buy Now
        </Button>
      </div>
      <div className={styles.product_info_spec_box}>
        <ProductSpecs
          title={"Product Specifications"}
          productData={product.productspecData}
        />
        <ProductSpecs
          title={"Additional Information"}
          productData={product.productAdditionalData}
        />
      </div>
    </div>
  );
};

export default ProductInfo;
