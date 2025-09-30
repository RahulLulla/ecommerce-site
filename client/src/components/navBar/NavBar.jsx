import React, { useState } from "react";
import { new_categories } from "../../constants/categories";
import AppTitle from "./appTitle/AppTitle";
import style from "./NavBar.module.css";
import NavBarItems from "./navBarItems/NavBarItems";
import NavBarPopper from "./navBarPopper/NavBarPopper";
import NavBarIcon from "./navBarIcons/NavBarIcons";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMainCategory, setCurrentMainCategory] = useState(null);

  const handleMouseEnter = (event, main_category) => {
    setAnchorEl(event.currentTarget);
    setCurrentMainCategory(main_category);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setCurrentMainCategory(null);
  };

  const genderCategories = [...new Set(new_categories.map((c) => c.gender))];
  const brandCategories = [...new Set(new_categories.map((c) => c.category))];
  const mainCategories = [...genderCategories, ...brandCategories];
  const subCategoryName = genderCategories.includes(currentMainCategory)
    ? "category"
    : "gender";
  const mainCategoryName = genderCategories.includes(currentMainCategory)
    ? "gender"
    : "category";

  return (
    <div id="navbar" className={`${style.navbar_main_container}`}>
      <div className={style.title_container}>
        <AppTitle />
      </div>
      <div className={style.elements_container}>
        <NavBarItems
          mainCategories={mainCategories}
          handleMouseEnter={handleMouseEnter}
        />

        <NavBarPopper
          anchorEl={anchorEl}
          currentMainCategory={currentMainCategory}
          handleMouseLeave={handleMouseLeave}
          subCategoryName={subCategoryName}
          mainCategoryName={mainCategoryName}
        />
      </div>
      <div className={style.icons_container}>
        <NavBarIcon />
      </div>
    </div>
  );
};

export default NavBar;
