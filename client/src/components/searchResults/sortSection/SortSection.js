/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SortSection.module.css";

import { sxStyles } from "./SortSectionStyle";
const SortSection = () => {
  const sortOptions = [
    "Price: High to Low",
    "Price: Low to High",
    "Top Sellers",
    "New Arrivals",
  ];
  const [currentSort, setCurrentSort] = React.useState(sortOptions[0]);

  const handleChange = (event) => {
    setCurrentSort(event.target.value);
  };

  const sortOptionsElements = sortOptions.map((option) => (
    <MenuItem key={option} value={option} sx={sxStyles.menuItem}>
      {option}
    </MenuItem>
  ));

  return (
    <div className={styles.sort_selection_box}>
      <div className={styles.sort_selection_result}>
        <h1>200 Results</h1>
      </div>
      <Box>
        <FormControl sx={{ width: 180 }}>
          <Select
            sx={sxStyles.selectStyle}
            labelId="products-sort-label"
            id="products-sort-select"
            value={currentSort}
            onChange={handleChange}
          >
            {sortOptionsElements}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default SortSection;
