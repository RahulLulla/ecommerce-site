/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CuratedContentItem.module.css";
import CuratedProducts from "../curatedProducts/CuratedProducts";

const CuratedContentItem = ({
  curratedTitle,
  curratedDetail,
  featured,
  bestSellers,
  newArrivals,
}) => {
  return (
    <div className={styles.curated_content_item}>
      <h1 className={styles.curated_title}>{curratedTitle}</h1>
      <p className={styles.curated_details}>{curratedDetail}</p>
      <CuratedProducts
        featured={featured}
        bestSellers={bestSellers}
        newArrivals={newArrivals}
      />
    </div>
  );
};
export default CuratedContentItem;
