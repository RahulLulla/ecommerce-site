import React, { useEffect, useState } from "react";
import styles from "./CategoryShowcase.module.css";
import CategoryItemShowcase from "../categoryItemShowcase/CategoryItemShowcase";
import { fetch_trending_categories } from "./fetch_trending_categories_requests";

const CategoryShowcase = () => {
  const [trendingItems, setTrendingItems] = useState([]);

  const elements = trendingItems.map((items) => (
    <CategoryItemShowcase items={items} key={items.categoryName} />
  ));

  useEffect(() => {
    fetch_trending_categories()
      .then((data) => setTrendingItems(data))
      .catch((error) => {
        console.error("Error fetching trending categories:", error);
      });
  }, []);

  return (
    <div className={styles.category_content}>
      <h1 className={styles.content_title}>Trending Categories</h1>
      <div className={styles.content_elements}>{elements}</div>
    </div>
  );
};

export default CategoryShowcase;
