import React from "react";
import styles from "./ProductDetailView.module.css";
import ProductGallery from "./productGallery/ProductGallery";
import ProductInfo from "./productInfo/ProductInfo";
import RecommendedProducts from "./recommendedProducts/RecommendedProducts";
import { useSelector } from "react-redux";
import { getCurrentProduct } from "../../features/currentProduct/currentProductSlice";

const ProductDetailView = () => {
  const product = useSelector(getCurrentProduct);

  return (
    <div className={styles.product_details_content}>
      <h1 className={styles.product_details_nav}>{product.productNav}</h1>
      <div className={styles.product_gallery_info}>
        <div className={styles.product_gallery_item}>
          <ProductGallery />
        </div>
        <div className={styles.product_description_item}>
          <div className={styles.scroll_guard}>
            <ProductInfo />
          </div>
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
};

export default ProductDetailView;
