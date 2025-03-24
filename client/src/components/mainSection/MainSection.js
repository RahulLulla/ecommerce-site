import React from "react";
import CollectionShowcase from "./collectionShowcase/CollectionShowcase";
import CategoryShowcase from "./categoryShowcase/CategoryShowcase";
import styles from "./MainSection.module.css";
import DiscoverShowcase from "./discoverShowcase/DiscoverShowcase";

const MainSection = () => {
  return (
    <div id="main-section" className={styles.main_section}>
      <CollectionShowcase />
      <CategoryShowcase />
      <DiscoverShowcase />
    </div>
  );
};

export default MainSection;
