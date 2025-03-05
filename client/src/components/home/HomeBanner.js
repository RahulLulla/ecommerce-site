import React from "react";
import styles from "./HomeBanner.module.css";
import PropTypes from "prop-types";

const HomeBanner = (props) => {
  return (
    <div id="banner" className={styles.background_container}>
      {props.children}
    </div>
  );
};

HomeBanner.propTypes = {
  children: PropTypes.node,
};

export default HomeBanner;
