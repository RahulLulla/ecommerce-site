import React from "react";
import styles from "./AppTitle.module.css";
import { Link } from "react-router-dom";

const AppTitle = () => {
  return (
    <>
      <div className={styles.app_title_container}>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          className={styles.app_title_container}
        >
          <section className={styles.app_logo}>
            <img
              src="/assets/tab_logo.png"
              alt="Logo"
              className={styles.app_image}
            />
          </section>
          <section className={styles.app_title}>
            <h1>Celestine</h1>
          </section>
        </Link>
      </div>
    </>
  );
};

export default AppTitle;
