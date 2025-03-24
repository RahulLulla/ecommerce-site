import { Popper, Paper, MenuItem, Grid2, ListItem } from "@mui/material";
import styles from "./SubCategoryOptions.module.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

const SubCategoryOptions = ({
  categories,
  currentCategory,
  handleMouseLeave,
  anchorEl,
}) => {
  const [, setCurrentSubCategory] = useState(null);
  const handleSubCategory = (subCategory) => {
    setCurrentSubCategory(subCategory);
  };

  const showSubCategory = ([subCategory, subCategoryValues], index) => (
    <Grid2 xs={10} key={index} className={styles.navbar_subcategory_list}>
      <ListItem className={styles.navbar_subcategory_header}>
        {subCategory}
      </ListItem>
      {subCategoryValues.map((item, index) => (
        <MenuItem
          key={item + index}
          className={styles.navbar_subcategory_items}
          onClick={() => handleSubCategory(item)}
        >
          {item}
        </MenuItem>
      ))}
    </Grid2>
  );

  const open = Boolean(anchorEl);

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-start"
      onMouseLeave={handleMouseLeave}
      className={styles.navbar_popper}
    >
      <Paper className={styles.navbar_paper}>
        <Grid2 container spacing={10}>
          {currentCategory &&
            Object.entries(categories[currentCategory]).map(showSubCategory)}
        </Grid2>
      </Paper>
    </Popper>
  );
};

SubCategoryOptions.propTypes = {
  categories: PropTypes.any,
  currentCategory: PropTypes.any,
  handleSubCategory: PropTypes.any,
  handleMouseLeave: PropTypes.any,
  anchorEl: PropTypes.any,
};

export default SubCategoryOptions;
