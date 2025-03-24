import React, { useState } from "react";
import styles from "./ProductGallery.module.css";

const ProductGallery = () => {
  const [selected, setSelected] = useState(0);
  const images = [
    "https://fossil.scene7.com/is/image/FossilPartners/MBG9628400_main?$sfcc_fos_large$",
    "https://fossil.scene7.com/is/image/FossilPartners/MBG9628400_1?$sfcc_fos_large$",
    "https://fossil.scene7.com/is/image/FossilPartners/MBG9628400_3?$sfcc_fos_large$",
    "https://fossil.scene7.com/is/image/FossilPartners/MBG9628400_9L?$sfcc_lifestyle_large$",
  ];

  const handleSelected = (index) => {
    setSelected(index);
  };

  const imageDisplay = images.map((image, i) => {
    const style = selected === i ? styles.product_thumbnail_focused : "";
    const productStyle = `${styles.product_thumbnail} ${style} `;

    return (
      <img
        src={image}
        key={image}
        className={productStyle}
        onClick={() => handleSelected(i)}
      />
    );
  });

  return (
    <div className={styles.product_gallery}>
      <div className={styles.product_thumbnail_container}>{imageDisplay}</div>
      <div>
        <img src={images[selected]} />
      </div>
    </div>
  );
};

export default ProductGallery;
