import React, { useEffect, useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import styles from "./NavBarIcons.module.css";
import { Link } from "react-router-dom";
import { handleSessionExpiry } from "utils/authentication";
import ProfileDropdownButton from "./ProfileDropdownButton";

const NavBarIcon = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(handleSessionExpiry());
  }, []);

  const display = isAuthenticated ? (
    <ProfileDropdownButton />
  ) : (
    <div className={styles.navbar_signin}>
      <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
        <h1>Sign In</h1>
      </Link>
    </div>
  );
  return (
    <div className={styles.navbar_icon_container}>
      <div className={styles.navbar_login_icon}>{display}</div>
      <div className={styles.navbar_cart_icon}>
        <ShoppingCartOutlinedIcon />
      </div>
    </div>
  );
};

export default NavBarIcon;
