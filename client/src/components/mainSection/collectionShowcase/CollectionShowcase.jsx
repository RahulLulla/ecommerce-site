import React, { useEffect, useState } from "react";
import styles from "./CollectionShowcase.module.css";
import CollectionItemsShowcase from "../collectionItemsShowcase/CollectionItemsShowcase";
import {
  fetch_best_sellers,
  fetch_new_arrivals,
  fetch_featured,
} from "./fetch_collection_requests";

const CollectionShowcase = () => {
  const [bestSellersForHer, setBestSellersForHer] = useState([]);
  const [bestSellersForHim, setBestSellersForHim] = useState([]);
  const [featuredForHer, setFeaturedForHer] = useState([]);
  const [featuredForHim, setFeaturedForHim] = useState([]);
  const [newArrivalsForHer, setNewArrivalsForHer] = useState([]);
  const [newArrivalsForHim, setNewArrivalsForHim] = useState([]);

  useEffect(() => {
    fetch_best_sellers().then((data) => {
      setBestSellersForHer(data.filter((item) => item.gender !== "men"));
      setBestSellersForHim(data.filter((item) => item.gender === "men"));
    });
    fetch_featured().then((data) => {
      setFeaturedForHer(data.filter((item) => item.gender !== "men"));
      setFeaturedForHim(data.filter((item) => item.gender === "men"));
    });
    fetch_new_arrivals().then((data) => {
      setNewArrivalsForHer(data.filter((item) => item.gender !== "men"));
      setNewArrivalsForHim(data.filter((item) => item.gender === "men"));
    });
  }, []);

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
