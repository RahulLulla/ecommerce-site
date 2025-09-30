import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./CartDropdownButton.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartDropdownButton = () => {
  return (
    <Dropdown className={styles.dropdown_container}>
      <Dropdown.Toggle
        variant="none"
        id="dropdown-basic"
        className={styles.dropdown_toggle}
      >
        <ShoppingCartOutlinedIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdown_menu}></Dropdown.Menu>
    </Dropdown>
  );
};
export default CartDropdownButton;
