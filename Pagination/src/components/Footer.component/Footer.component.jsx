import React from "react";
import style from "./Footer.module.css";

export default function Footer(props) {
  return (
    <ul className={style.footerList}>
      {props.footerItems.map((item, index) => {
        return (
          <li key={index} className={style.footerListItem}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
