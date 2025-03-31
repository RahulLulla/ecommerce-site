/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";

const ProductElement = ({ product, index, intersection }) => {
  const [isElementVisible, setIsElementVisible] = useState(false);
  const delay = 10;

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setTimeout(() => {
        setIsElementVisible(true);
      }, index * delay);
    } else {
      setIsElementVisible(false);
    }
  }, [index, intersection]);

  return <ProductCard product={product} isElementVisible={isElementVisible} />;
};

export default ProductElement;
