import React from "react";
import CuratedContent from "./curatedContent/CuratedContent";
import FeaturedProducts from "./featuredproducts/FeaturedProducts";
import styles from "./MainSection.module.css";
const MainSection = () => {
  return (
    <div id="main-section" className={styles.main_section}>
      <CuratedContent />
      <FeaturedProducts />
    </div>
  );
};

export default MainSection;
