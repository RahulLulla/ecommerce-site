/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from "react";
import styles from "./ProductBrowse.module.css";
import SortSection from "../sortSection/SortSection";
import FilterSection from "../filterSection/FilterSection";
import ProductGrid from "../productGrid/ProductGrid";

const ProductBrowse = ({ products }) => {
  const sortOptions = React.useMemo(
    () => ["Price: High to Low", "Price: Low to High"],
    []
  );
  const [filter, setFilter] = useState({
    price: [0, 0],
    materials: [],
    colors: [],
  });
  const [currentSort, setCurrentSort] = React.useState(sortOptions[0]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const sortProducts = useCallback(
    (products = [], currentSort = sortOptions[0]) => {
      if (currentSort === sortOptions[0]) {
        return products.sort((a, b) => b.price - a.price);
      } else if (currentSort === sortOptions[1]) {
        return products.sort((a, b) => a.price - b.price);
      } else {
        return products;
      }
    },
    [sortOptions]
  );

  useEffect(() => {
    if (products.length === 0) return;

    const filtered = products.filter((product) => {
      const isPriceValid =
        filter.price[0] != 0 && filter.price[1] != 0
          ? product.price >= filter.price[0] && product.price <= filter.price[1]
          : true;
      const isMaterialValid = filter.materials.length
        ? filter.materials.includes(product.material)
        : true;
      const isColorValid = filter.colors.length
        ? filter.colors.includes(product.color)
        : true;
      return isPriceValid && isMaterialValid && isColorValid;
    });

    const sortedProducts = sortProducts(filtered, currentSort);

    setFilteredProducts(sortedProducts);
    
  }, [products, filter, currentSort, sortProducts]);

  return (
    <>
      <div className={styles.sort_products_container}>
        <SortSection
          currentSort={currentSort}
          sortOptions={sortOptions}
          numberOfSearchResults={filteredProducts.length}
          setCurrentSort={setCurrentSort}
        />
      </div>
      <div className={styles.filter_products_container}>
        <div className={styles.filter_content}>
          <FilterSection
            filter={filter}
            filteredProducts={filteredProducts}
            onFilterChange={setFilter}
          />
        </div>
        <div className={styles.product_grid_content}>
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </>
  );
};
export default ProductBrowse;
