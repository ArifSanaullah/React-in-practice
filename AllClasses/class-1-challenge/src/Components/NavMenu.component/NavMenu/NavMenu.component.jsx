import React from "react";
import style from "./NavMenu.module.css";
import { Link } from "react-router-dom";

export default function NavMenu({ NavItems, flexDirection }) {
  return (
    <ul className={style.navMenu} style={{ flexDirection: flexDirection }}>
      {NavItems.map((item, index) => (
        <li key={index}>
          <Link to={`/${item.title.toLowerCase()}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
