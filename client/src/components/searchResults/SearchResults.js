import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import FilterSection from "./filterSection/FilterSection";
import ProductGrid from "./productGrid/ProductGrid";
import { featuredForHer as products } from "../../constants/suggestions";
import SortSection from "./sortSection/SortSection";

const SearchResults = () => {
  const category_1 = "Bags";
  const category_2 = "Women's Handbags";
  const category_3 = "Duffel Bags";
  const category = `${category_1} / ${category_2} / ${category_3}`;

  const [, setFilter] = useState({
    price: null,
    materials: [],
    colors: [],
  });

  return (
    <div className={styles.search_result_content}>
      <h1 className={styles.search_result_title}>{category}</h1>
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
