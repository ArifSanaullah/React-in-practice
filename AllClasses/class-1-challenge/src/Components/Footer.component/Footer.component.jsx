import React from "react";
import style from "./Footer.module.css";
import NavMenu from "../NavMenu.component/NavMenu/NavMenu.component";

export default function Footer() {
  return (
    <footer className={style.Footer}>
      <div className={style.Footer__container}>
        <div className={style.Footer__logo}>
          <svg viewBox="0 0 27.23 27.23">
            <rect fill="#333333" width="27.23" height="27.23" rx="2"></rect>
            <polygon
              fill="#fff"
              points="5.8 21.75 13.66 21.75 13.67 9.98 17.59 9.98 17.58 21.76 21.51 21.76 21.52 6.06 5.82 6.04 5.8 21.75"
            ></polygon>
          </svg>
        </div>
        <div className={style.Footer__Navig}>
          <NavMenu
            NavItems={[
              "Help",
              "Documentation",
              "Commmunity",
              "Resources",
              "Advisories",
              "Status",
              "Contact"
            ]}
            flexDirection="column"
          />
        </div>
        <div className={style.Footer__About}>
          <NavMenu
            NavItems={[
              "About",
              "Company",
              "Blog",
              "Careers",
              "Webinars",
              "Press",
              "Newsletter"
            ]}
            flexDirection="column"
          />
        </div>
        <div className={style.Footer__Policy}>
          <NavMenu
            NavItems={[
              "Terms & Policies",
              "Policies",
              "Terms of Use",
              "Code of Conduct"
            ]}
            flexDirection="column"
          />
        </div>
      </div>
    </footer>
  );
}