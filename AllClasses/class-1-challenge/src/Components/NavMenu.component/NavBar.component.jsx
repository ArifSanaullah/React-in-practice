import React from "react";
import style from "./NavBar.module.css";
import NavMenu from "./NavMenu/NavMenu.component";
import NavSearchBar from "./NavSearchBar/NavSearchBar.component";

export default function NavBar() {
  const navItems = ["Products", "Pricing", "Documentation", "Community"];
  return (
    <header>
      <nav className={style.navBar__navigation}>
        <div className={style.navBar__left}>
          <span className={style.navBar__heart}>❤</span>
          <span className={style.navBar__textContent}>
            {" "}
            Norwegian Peat Moss{" "}
          </span>
        </div>
        <div className={style.navBar__right}>
          <NavMenu NavItems={navItems} />
        </div>
      </nav>
      <NavSearchBar />
    </header>
  );
}
