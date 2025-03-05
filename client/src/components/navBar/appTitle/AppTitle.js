import { Typography } from "@mui/material";
import React from "react";
import styles from "./AppTitle.module.css"

const AppTitle = () => {
  return (
    <>
      {/* App Logo */}
      <Typography className={styles.siteTitle}>Celestine</Typography>
    </>
  );
};

export default AppTitle;
