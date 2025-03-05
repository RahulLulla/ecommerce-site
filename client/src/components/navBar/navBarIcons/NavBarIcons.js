import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./NavBarIcons.module.css";

const NavBarIcon = () => {
  return (
    <>
      <div className={styles.navbar_login_icon}>
        <PersonOutlineOutlinedIcon />
      </div>
      <div className={styles.navbar_cart_icon}>
        <ShoppingCartOutlinedIcon />
      </div>
    </>
  );
};

export default NavBarIcon;
