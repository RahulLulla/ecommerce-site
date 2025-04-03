import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import FilterSection from "./filterSection/FilterSection";
import ProductGrid from "./productGrid/ProductGrid";
import { featuredForHer as products } from "../../constants/suggestions";
import SortSection from "./sortSection/SortSection";
import { useParams } from "react-router-dom";
import { capitalizeFirstLetterOfWords } from "utils/misc";

const SearchResults = () => {
  const { category, subcategory, gender } = useParams();
  const capCategory = capitalizeFirstLetterOfWords(category);
  const capGender = capitalizeFirstLetterOfWords(gender);
  const capSubcategory = capitalizeFirstLetterOfWords(subcategory);
  const nav = `${capCategory} / ${capGender}'s ${capCategory} / ${capSubcategory}`;

  const [, setFilter] = useState({
    price: null,
    materials: [],
    colors: [],
  });

  return (
    <div className={styles.search_result_content}>
      <h1 className={styles.search_result_title}>{nav}</h1>
      {/* Sorting */}
      <div className={styles.sort_products_container}>
        <SortSection />
      </div>
      <div className={styles.filter_products_container}>
        <div className={styles.filter_content}>
          <FilterSection onFilterChange={setFilter} />
        </div>
        <div className={styles.product_grid_content}>
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};
export default SearchResults;
