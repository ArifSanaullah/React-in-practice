import React from "react";
import style from "./Description.module.css";
export default function Description() {
    return (
      <div className={style.Description}>
        <img
          src="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
          alt=""
        />
        <h2 className={style.Desc__h2}>
          Bring the best of open source to you, your team and your company
        </h2>
        <div className={style.Desc__Detail}>
          Relied upon by more than 11 million developers worldwide, npm is
          committed to making JavaScript development elegant, productive, and
          safe. The free npm Registry has become the center of JavaScript code
          sharing, and with more than one million packages, the largest software
          registry in the world. Our other tools and services take the Registry,
          and the work you do around it, to the next level.
        </div>
      </div>
    );
}