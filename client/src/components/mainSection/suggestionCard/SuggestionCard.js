/* eslint-disable react/prop-types */
import React from "react";
import styles from "./SuggestionCard.module.css";
import { formatRupee } from "../../../utils/formatRupee";

const SuggestionCard = ({ suggestion, isElementVisible }) => {
  const visibilityStyle = isElementVisible ? styles.appear : styles.disappear;

  return (
    <div className={`${styles.suggestion_card} ${visibilityStyle}`}>
      <span className={styles.suggestion_image_content}>
        <img
          className={styles.suggestion_image}
          src={suggestion.url}
          alt={suggestion.productName}
        />
      </span>
      <h3 className={styles.suggestion_name}>{suggestion.productName}</h3>
      <h3 className={styles.suggestion_price}>
        MRP {formatRupee(suggestion.price)}
      </h3>
    </div>
  );
};

export default SuggestionCard;
