/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./NewLink.module.css";

const NewLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className={styles.link_style}
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  );
};

export default NewLink;
