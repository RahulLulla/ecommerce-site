import React, { useEffect, useState } from "react";
import styles from "./NavBarIcons.module.css";
import { Link } from "react-router-dom";
import { handleSessionExpiry } from "utils/authentication";
import ProfileDropdownButton from "../profileDropdownButton/ProfileDropdownButton";
import CartDropdownButton from "../cartDropdownButton/CartDropdownButton";

const NavBarIcon = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(handleSessionExpiry());
  }, []);

  const profileIcon = isAuthenticated ? (
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
      <div className={styles.navbar_login_icon}>{profileIcon}</div>
      <div className={styles.navbar_cart_icon}>
        <CartDropdownButton />
      </div>
    </div>
  );
};

export default NavBarIcon;
