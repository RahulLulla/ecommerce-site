import React from "react";
import styles from "./CategoryShowcase.module.css";
import { trendingCategoryItems as trendingItems } from "../../../constants/suggestions";
import CategoryItemShowcase from "../categoryItemShowcase/CategoryItemShowcase";

const CategoryShowcase = () => {
  const elements = trendingItems.map((items) => (
    <CategoryItemShowcase items={items} key={items.categoryName} />
  ));

  return (
    <div className={styles.category_content}>
      <h1 className={styles.content_title}>Trending Categories</h1>
      <div className={styles.content_elements}>{elements}</div>
    </div>
  );
};

export default CategoryShowcase;
