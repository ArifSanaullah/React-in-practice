import React from "react";
import style from "./NavMenu.module.css";

export default function NavMenu({ NavItems }) {
  return (
    <ul className={style.navMenu}>
      {NavItems.map((item, index) => (
        <li key={index}> {item} </li>
      ))}
    </ul>
  );
}
