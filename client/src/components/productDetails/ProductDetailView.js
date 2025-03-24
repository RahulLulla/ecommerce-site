import React from "react";
import styles from "./ProductDetailView.module.css";
import ProductGallery from "./productGallery/ProductGallery";
import ProductInfo from "./productInfo/ProductInfo";
import RecommendedProducts from "./recommendedProducts/RecommendedProducts";

const ProductDetailView = () => {
  const product_title = "Bags / Women's Handbags / Duffel Bags / ABC Product";

  return (
    <div className={styles.product_details_content}>
      <h1 className={styles.product_details_title}>{product_title}</h1>
      <div className={styles.product_gallery_info}>
        <ProductGallery />
        <ProductInfo />
      </div>
      <RecommendedProducts />
    </div>
  );
};

export default ProductDetailView;
