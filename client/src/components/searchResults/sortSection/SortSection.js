/* eslint-disable react/prop-types */
import React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SortSection.module.css";
import { sxStyles } from "./SortSectionStyle";

const SortSection = ({ setFilteredProducts, numberOfSearchResults }) => {
  console.log(
    "Rendering SortSection with numberOfSearchResults:",
    numberOfSearchResults
  );
  const sortOptions = React.useMemo(
    () => ["Price: High to Low", "Price: Low to High"],
    []
  );

  const [currentSort, setCurrentSort] = React.useState(sortOptions[0]);

  const sortOptionsElements = sortOptions.map((option) => (
    <MenuItem key={option} value={option} sx={sxStyles.menuItem}>
      {option}
    </MenuItem>
  ));

  const handleChange = (event) => {
    const newSort = event.target.value;
    setCurrentSort(newSort);
    if (newSort === sortOptions[0]) {
      console.log("Sorted High to Low");
      setFilteredProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => b.price - a.price)
      );
    } else if (newSort === sortOptions[1]) {
      setFilteredProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.price - b.price)
      );
    }
  };

  return (
    <div className={styles.sort_selection_box}>
      <div className={styles.sort_selection_result}>
        <h1>{numberOfSearchResults} Results</h1>
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
