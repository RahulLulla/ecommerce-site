/* eslint-disable react/prop-types */
import { Popper, Paper, Grid2 } from "@mui/material";
import styles from "./NavBarPopper.module.css";
import React from "react";
import { new_categories } from "../../../constants/categories";
import NavBarGrid from "../navBarGrid/NavBarGrid";

const NavBarPopper = ({
  currentMainCategory,
  handleMouseLeave,
  anchorEl,
  mainCategoryName,
  subCategoryName,
}) => {
  const open = Boolean(anchorEl);
  const groupedByMainCategory = new_categories.filter(
    (c) => c[mainCategoryName] === currentMainCategory
  );

  return (
    <Popper
      open={open}
      anchorEl={anchorEl}
      placement="bottom-start"
      onMouseLeave={handleMouseLeave}
      className={styles.navbar_popper}
    >
      <Paper className={styles.navbar_paper}>
        <Grid2 container spacing={15}>
          <NavBarGrid
            groupedByMainCategory={groupedByMainCategory}
            subCategoryName={subCategoryName}
          />
        </Grid2>
      </Paper>
    </Popper>
  );
};

export default NavBarPopper;
