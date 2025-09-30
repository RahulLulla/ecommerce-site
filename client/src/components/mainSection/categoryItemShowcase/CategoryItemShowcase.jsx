/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./CategoryItemShowcase.module.css";
import NewLink from "../../common/NewLink/NewLink";

const CategoryItemShowcase = ({ items }) => {
  const [show, setShow] = useState(false);
  const linkForMen = `/products/${items.mainCategory}/${"Men"}/${
    items.categoryName
  }`.toLowerCase();
  const linkForWomen = `/products/${items.mainCategory}/${"Women"}/${
    items.categoryName
  }`.toLowerCase();

  const optionElements = show ? (
    <div className={styles.category_options}>
      <div className={styles.category_option}>
        <NewLink to={linkForWomen}>
          <h3 className={styles.category_option_title}>SHOP WOMEN</h3>
        </NewLink>
      </div>
      <div className={styles.category_option}>
        <NewLink to={linkForMen}>
          <h3 className={styles.category_option_title}>SHOP MEN</h3>
        </NewLink>
      </div>
    </div>
  ) : (
    ""
  );

  return (
    <div className={styles.category_container}>
      <h1 className={styles.category_name}>{items.categoryName}</h1>
      <div
        className={styles.category_figure}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <img
          src={items.url}
          alt={items.categoryName}
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
