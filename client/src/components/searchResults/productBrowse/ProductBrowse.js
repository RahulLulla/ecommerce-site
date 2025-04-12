/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import styles from "./ProductBrowse.module.css";
import SortSection from "../sortSection/SortSection";
import FilterSection from "../filterSection/FilterSection";
import ProductGrid from "../productGrid/ProductGrid";

const ProductBrowse = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [filter, setFilter] = useState({
    price: [],
    materials: [],
    colors: [],
  });

  console.log("Rendering ProductBrowse:", products, filteredProducts, filter);

  useEffect(() => {
    if (products.length === 0) return;
    const filteredProducts = products.filter((product) => {
      const isPriceValid = filter.price.length
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
    setFilteredProducts(filteredProducts);
  }, [products, filter]);

  return (
    <>
      <div className={styles.sort_products_container}>
        <SortSection
          numberOfSearchResults={filteredProducts.length}
          setFilteredProducts={setFilteredProducts}
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
