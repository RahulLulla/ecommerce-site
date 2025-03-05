import PropTypes from "prop-types";
import styles from "./NavBarItems.module.css";
import React from "react";

const NavBarItems = ({ categories, handleMouseEnter }) => {
  return (
    <ul className={styles.navbar_list}>
      {Object.keys(categories).map((category) => (
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
  categories: PropTypes.object.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
};

export default NavBarItems;
