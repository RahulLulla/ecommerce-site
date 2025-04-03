import { MenuItem, Grid2, ListItem } from "@mui/material";
import styles from "./NavBarGrid.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarGrid = ({ groupedByMainCategory, subCategoryName }) => {
  const [, setCurrentSubCategory] = useState(null);

  const handleSubCategory = (subCategory) => {
    setCurrentSubCategory(subCategory);
  };

  const subCategories = [
    ...new Set(groupedByMainCategory.map((c) => c[subCategoryName])),
  ];

  return subCategories.map((subCategory, index) => {
    const groupedBySubCategories = groupedByMainCategory.filter(
      (c) => c[subCategoryName] === subCategory
    );

    return (
      <Grid2 key={index} className={styles.navbar_subcategory_list}>
        <ListItem className={styles.navbar_subcategory_header}>
          {subCategory}
        </ListItem>
        {groupedBySubCategories.map((c, index2) => (
          <MenuItem
            key={c.sub_category + index2}
            className={styles.navbar_subcategory_items}
            onClick={() => handleSubCategory(c.sub_category)}
          >
            <Link
              to={`/products/${c.category}/${c.gender}/${c.sub_category}`.toLowerCase()}
              className={styles.navbar_subcategory_link}
            >
              {c.sub_category}
            </Link>
          </MenuItem>
        ))}
      </Grid2>
    );
  });
};

export default NavBarGrid;
