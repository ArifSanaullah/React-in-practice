import React from "react";
import style from "./NavSearchBar.module.css";

const svgSearchIcon = (
    <svg
      className={style.SearchBar__SearchIcon}
      width="15px"
      height="15px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Artboard-1" stroke="#777777" strokeWidth="1.3">
          <g id="Group">
            <path
              d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"
              id="Stroke-3"
            ></path>
            <path d="M11.4913,11.4913 L17.8683,17.8683" id="Stroke-7"></path>
          </g>
        </g>
      </g>
    </svg>
  );
export default function NavSearchBar() {
  return (
    <div className={style.NavSearchBar}>
      <div className={style.NavSearchBar__logo} >
        <svg viewBox="0 0 780 250">
          <path
            fill="#231F20"
            d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
          ></path>
        </svg>
      </div>
      <div className={style.NavSearchBar__SearchBar}>
        {svgSearchIcon}
        <input
          className={style.SearchBar__SearchInput}
          type="search"
          name="searchPackages"
          id="SP"
          placeholder="Search Packages"
        />
        <button className={style.SearchBar__SearchBtn}>Search</button>
      </div>
      <div className={style.NavSearchBar__Sign}>
        <button className={style.NavSearchBar__SignUp}>Sign Up</button>
        <button className={style.NavSearchBar__SignIn}>Sign In</button>
      </div>
    </div>
  );
}
