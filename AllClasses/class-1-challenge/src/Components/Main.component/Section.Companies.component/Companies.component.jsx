import React from "react";
import style from "./Companies.module.css";

export default function Companies() {
  return (
    <section className={style.Companies}>
      <h1 className={style.Comp__h1}>
        Gratefully serving everyone from solo devs to the Fortune 500
      </h1>
      <img
        className={style.Comp__logos}
        src="https://static.npmjs.com/attachments/ck49cu3ceh1sust74dkzkfn69-grey-logowall.png"
        alt=""
      />
    </section>
  );
}
