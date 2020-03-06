import React from "react";
import style from "./NavBar.module.css";
import NavMenu from "./NavMenu/NavMenu.component";
import NavSearchBar from "./NavSearchBar/NavSearchBar.component";
import Products from "../../screens/Products.component/Products.component";
import Documentation from "../../screens/Documentation.component/Documentation.component";
import Community from "../../screens/Community.component/Community.component";

export const navItems = [
  { title: "Products", route: <Products /> },
  { title: "Pricing", route: <Products /> },
  { title: "Documentation", route: <Documentation /> },
  { title: "Community", route: <Community /> }
];

export default function NavBar() {
  return (
    <header>
      <nav className={style.navBar__navigation}>
        <div className={style.navBar__left}>
          <span className={style.navBar__heart}>❤</span>
          <span className={style.navBar__textContent}>Norwegian Peat Moss</span>
        </div>
        <div className={style.navBar__right}>
          <NavMenu NavItems={navItems} flexDirection="row" />
        </div>
      </nav>
      <NavSearchBar />
    </header>
  );
}
