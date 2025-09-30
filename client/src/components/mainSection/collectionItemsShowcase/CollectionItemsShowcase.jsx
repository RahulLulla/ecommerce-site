import React from "react";
import styles from "./CollectionItemsShowcase.module.css";
import ProductShowcase from "../productShowcase/ProductShowcase";

const CollectionItemsShowcase = ({
  collectionTitle,
  // collectionDetail,
  featured,
  bestSellers,
  newArrivals,
}) => {
  return (
    <div className={styles.collection_content_item}>
      <h1 className={styles.collection_title}>{collectionTitle}</h1>
      {/* <p className={styles.collection_details}>{collectionDetail}</p> */}
      <ProductShowcase
        featured={featured}
        bestSellers={bestSellers}
        newArrivals={newArrivals}
      />
    </div>
  );
};
export default CollectionItemsShowcase;
