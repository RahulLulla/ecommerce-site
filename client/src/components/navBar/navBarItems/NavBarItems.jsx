/* eslint-disable react/prop-types */
import React from "react";
import styles from "./NavBarItems.module.css";

const NavBarItems = ({ mainCategories, handleMouseEnter }) => {
  const mainCategoryItems = mainCategories.map((category) => (
    <li
      key={category}
      className={styles.navbar_list_items}
      onMouseEnter={(e) => handleMouseEnter(e, category)}
    >
      {category}
    </li>
  ));

  return <ul className={styles.navbar_list}>{mainCategoryItems}</ul>;
};

export default NavBarItems;
