import React from "react";
import styles from "./CategoryShowcase.module.css";
import { categories } from "../../../constants/suggestions";
import CategoryItemShowcase from "../categoryItemShowcase/CategoryItemShowcase";

const CategoryShowcase = () => {
  const elements = categories.map((category) => (
    <CategoryItemShowcase category={category} key={category.categoryName} />
  ));

  return (
    <div className={styles.category_content}>
      <h1 className={styles.content_title}>Trending Categories</h1>
      <div className={styles.content_elements}>{elements}</div>
    </div>
  );
};

export default CategoryShowcase;
