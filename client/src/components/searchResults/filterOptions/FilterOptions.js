/* eslint-disable react/prop-types */
import React from "react";
import styles from "./FilterOptions.module.css";

const FilterOptions = ({
  filterTitle,
  optionsArray,
  handleOptionChange,
  checkCondition,
}) => {
  const handleChange = (event) => {
    handleOptionChange(event.target.value);
  };

  return (
    <div className={styles.filter_container}>
      <hr className={styles.filter_line} />
      <h4 className={styles.filter_title}>{filterTitle}</h4>
      {optionsArray.map((option) => (
        <label key={option} className={styles.filter_label}>
          <input
            type="checkbox"
            name={filterTitle}
            value={option}
            checked={checkCondition(option)}
            onChange={handleChange}
            className={styles.filter_checkbox}
          />
          <span className={styles.filter_item}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default FilterOptions;
