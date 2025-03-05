import React from "react";
import styles from "./CuratedContent.module.css";
import {
  featuredForHer,
  featuredForHim,
  bestSellersForHer,
  bestSellersForHim,
  newArrivalsForHer,
  newArrivalsForHim,
} from "../../../constants/suggestions";
import CuratedContentItem from "../curatedContentItem/CuratedContentItem";

const CuratedContent = () => {
  return (
    <div className={styles.curated_content}>
      <CuratedContentItem
        curratedTitle={"Women's Collection"}
        curratedDetail={
          "Curate your look with accessories that speak to your individuality and elegance"
        }
        featured={featuredForHer}
        bestSellers={bestSellersForHer}
        newArrivals={newArrivalsForHer}
      />
      <br /> <br />
      <CuratedContentItem
        curratedTitle={"Men's Collection"}
        curratedDetail={
          "Redefine your wardrobe with premium pieces designed for the modern man"
        }
        featured={featuredForHim}
        bestSellers={bestSellersForHim}
        newArrivals={newArrivalsForHim}
      />
    </div>
  );
};

export default CuratedContent;
