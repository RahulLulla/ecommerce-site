/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./CategoryItemShowcase.module.css";

const CategoryItemShowcase = ({ category }) => {
  const [show, setShow] = useState(false);

  const optionElements = show ? (
    <div className={styles.category_options}>
      <div className={styles.category_option}>
        <h3 className={styles.category_option_title}>SHOP WOMEN</h3>
      </div>
      <div className={styles.category_option}>
        <h3 className={styles.category_option_title}>SHOP MEN</h3>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div className={styles.category_container}>
      <h1 className={styles.category_name}>{category.categoryName}</h1>
      <div
        className={styles.category_figure}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img
          src={category.url}
          alt={category.categoryName}
          className={`${styles.category_image} ${
            show ? styles.category_image_hover : ""
          }`}
        />
        {optionElements}
      </div>
    </div>
  );
};
export default CategoryItemShowcase;
