import React, { useState } from "react";
import { categories } from "../../constants/categories";
import AppTitle from "./appTitle/AppTitle";
import style from "./NavBar.module.css";
import NavBarItems from "./navBarItems/NavBarItems";
import SubCategoryOptions from "./subCategoryOptions/SubCategoryOptions";
import NavBarIcon from "./navBarIcons/NavBarIcons";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [, setCurrentSubCategory] = useState(null);

  const handleMouseEnter = (event, category) => {
    setAnchorEl(event.currentTarget);
    setCurrentCategory(category);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
    setCurrentCategory(null);
  };

  const handleSubCategory = (subCategory) => {
    setCurrentSubCategory(subCategory);
  };

  const highlight = anchorEl ? style.navbar_focus : "";

  return (
    <div id="navbar" className={`${style.navbar_container} ${highlight}`}>
      <div className={style.title_container}>
        <AppTitle />
      </div>
      <div className={style.navbar_elements}>
        <NavBarItems
          categories={categories}
          handleMouseEnter={handleMouseEnter}
        />
        <SubCategoryOptions
          anchorEl={anchorEl}
          categories={categories}
          currentCategory={currentCategory}
          handleSubCategory={handleSubCategory}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
      <div className={style.navbar_icons}>
        <NavBarIcon />
      </div>
    </div>
  );
};

export default NavBar;
