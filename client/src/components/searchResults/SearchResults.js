import React, { useEffect, useState } from "react";
import styles from "./SearchResults.module.css";
import { useParams } from "react-router-dom";
import { fetch_search_results } from "./fetch_search_results_requests";
import SearchResultNav from "./searchResultNav/SearchResultNav";
import ProductBrowse from "./productBrowse/ProductBrowse";

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const { category, subcategory, gender } = useParams();

  useEffect(() => {
    fetch_search_results(category, subcategory, gender)
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching trending categories:", error);
      });
  }, [category, subcategory, gender]);

  return (
    <div className={styles.search_result_content}>
      <SearchResultNav />
      <ProductBrowse products={products} />
    </div>
  );
};
export default SearchResults;
