/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SortSection.module.css";
import { sxStyles } from "./SortSectionStyle";

const SortSection = ({
  currentSort,
  setCurrentSort,
  numberOfSearchResults,
  sortOptions,
}) => {
  const sortOptionsElements = sortOptions.map((option) => (
    <MenuItem key={option} value={option} sx={sxStyles.menuItem}>
      {option}
    </MenuItem>
  ));

  return (
    <div className={styles.sort_selection_box}>
      <div className={styles.sort_selection_result}>
        <h1 className={styles.sort_result_title}>{numberOfSearchResults} Results</h1>
      </div>
      <Box>
        <FormControl sx={{ width: 180 }}>
          <Select
            sx={sxStyles.selectStyle}
            labelId="products-sort-label"
            id="products-sort-select"
            value={currentSort}
            onChange={(event) => setCurrentSort(event.target.value)}
          >
            {sortOptionsElements}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SortSection;
