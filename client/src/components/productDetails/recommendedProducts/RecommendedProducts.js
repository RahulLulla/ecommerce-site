import React from "react";
import styles from "./RecommendedProducts.module.css";
import ProductItemsShowcase from "../../common/productItemsShowcase/ProductItemsShowcase";
import { useSelector } from "react-redux";
import { getRecommendedProducts } from "../../../features/recommendedProducts/recommendedProductsSlice";

const RecommendedProducts = () => {
  const recommendedProducts = useSelector(getRecommendedProducts);
  return (
    <div className={styles.recommended_product_content}>
      <h1 className={styles.recommended_product_title}>You May Also Like</h1>
      <div>
        <ProductItemsShowcase products={recommendedProducts} />
      </div>
    </div>
  );
};

export default RecommendedProducts;
