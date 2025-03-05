import React from "react";
import styles from "./FeaturedProducts.module.css";

const FeaturedProducts = () => {
  const features = [
    {
      productName: "Vintage Watches",
      url: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-conquest-chrono-ski-edition-l3-836-4-52-9-1733411124-thumbnail.png?w=420",
      price: 2012,
    },
    {
      productName: "Satchel Bags",
      url: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-conquest-chrono-ski-edition-l3-836-4-52-9-1733411124-thumbnail.png?w=420",
      price: 2012,
    },
    {
      productName: "Bi-fold Wallets",
      url: "https://api.ecom.longines.com/media/catalog/product/w/a/watch-collection-conquest-chrono-ski-edition-l3-836-4-52-9-1733411124-thumbnail.png?w=420",
      price: 2012,
    },
  ];

  const elements = features.map((feature) => (
    <>
      <div className={styles.featured_card}>
        <h1>{feature.productName}</h1>
        <span className={styles.featured_item}>
          <img
            src={feature.url}
            alt={feature.productName}
            className={styles.featured_image}
          />
        </span>
      </div>
    </>
  ));

  return (
    <div className={styles.featured_content}>
      <h1>Featured Categories</h1>
      <div className={styles.featured_container}>{elements}</div>
    </div>
  );
};

export default FeaturedProducts;
