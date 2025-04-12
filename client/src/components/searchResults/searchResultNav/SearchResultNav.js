import React from "react";
import { capitalizeFirstLetterOfWords } from "utils/misc";
import { useParams } from "react-router-dom";
import styles from "./SearchResultNav.module.css";

const SearchResultNav = () => {
  const { category, subcategory, gender } = useParams();

  const capCategory = capitalizeFirstLetterOfWords(category);
  const capGender = capitalizeFirstLetterOfWords(gender);
  const capSubcategory = capitalizeFirstLetterOfWords(subcategory);
  const nav = `${capCategory} / ${capGender}'s ${capCategory} / ${capSubcategory}`;

  return <h1 className={styles.search_result_title}>{nav}</h1>;
};

export default SearchResultNav;
