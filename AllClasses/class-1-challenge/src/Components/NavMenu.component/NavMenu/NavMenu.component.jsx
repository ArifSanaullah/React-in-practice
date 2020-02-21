import React from "react";
import style from "./NavMenu.module.css";

export default function NavMenu({ NavItems, flexDirection }) {
  return (
    <ul className={style.navMenu} style={{flexDirection: flexDirection}}>
      {NavItems.map((item, index) => (
        <li key={index}> {item} </li>
      ))}
    </ul>
  );
}
