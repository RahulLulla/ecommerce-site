import PropTypes from "prop-types";
import styles from "./NavBarItems.module.css";
import React from "react";

const NavBarItems = ({ main_categories, handleMouseEnter }) => {
  return (
    <ul className={styles.navbar_list}>
      {main_categories.map((category) => (
        <li
          key={category}
          className={styles.navbar_list_items}
          onMouseEnter={(e) => handleMouseEnter(e, category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
};

NavBarItems.propTypes = {
  main_categories: PropTypes.object.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
};

export default NavBarItems;
