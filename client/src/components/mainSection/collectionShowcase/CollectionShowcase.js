import React from "react";
import styles from "./CollectionShowcase.module.css";
import {
  featuredForHer,
  featuredForHim,
  bestSellersForHer,
  bestSellersForHim,
  newArrivalsForHer,
  newArrivalsForHim,
} from "../../../constants/suggestions";
import CollectionItemsShowcase from "../collectionItemsShowcase/CollectionItemsShowcase";

const CollectionShowcase = () => {
  return (
    <div className={styles.collection_content}>
      <CollectionItemsShowcase
        collectionTitle={"Women's Collection"}
        collectionDetail={
          "Curate your look with accessories that speak to your individuality and elegance"
        }
        featured={featuredForHer}
        bestSellers={bestSellersForHer}
        newArrivals={newArrivalsForHer}
      />

      <div className={styles.space_block} />

      <CollectionItemsShowcase
        collectionTitle={"Men's Collection"}
        collectionDetail={
          "Redefine your wardrobe with premium pieces designed for the modern man"
        }
        featured={featuredForHim}
        bestSellers={bestSellersForHim}
        newArrivals={newArrivalsForHim}
      />
    </div>
  );
};

export default CollectionShowcase;
