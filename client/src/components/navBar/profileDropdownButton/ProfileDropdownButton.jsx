import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "./ProfileDropdownButton.module.css";
import { logout } from "@/utils/authentication.jsx";
import { useNavigate } from "react-router-dom";

const ProfileDropdownButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate(0);
    logout();
  };

  return (
    <Dropdown className={styles.dropdown_container}>
      <Dropdown.Toggle
        variant="none"
        id="dropdown-basic"
        className={styles.dropdown_toggle}
      >
        <PersonOutlineOutlinedIcon />
      </Dropdown.Toggle>

      <Dropdown.Menu className={styles.dropdown_menu}>
        <Dropdown.Item className={styles.dropdown_menu_item}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.dropdown_menu_item}
          onClick={handleLogout}
        >
          Logout
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
export default ProfileDropdownButton;
