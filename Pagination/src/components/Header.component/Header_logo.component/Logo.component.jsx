import React from "react";
import style from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={style.Logo}>
      <img
        className={style.Logo__img}
        src="https://d3nb9u6x572n0.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
        alt=""
      />
      <div className={style.Logo__label}>
          Search <br/> Hacker News
      </div>
    </div>
  );
}
