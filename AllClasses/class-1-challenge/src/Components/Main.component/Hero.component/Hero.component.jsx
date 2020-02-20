import React from "react";
import style from "./Hero.module.css";
export default function Hero() {
  return (
    <section className={style.Hero}>
      <div className={style.Hero__container}>
        <div className={style.Hero__mw1}>
          <h1 className={style.Hero__Headline}>Build amazing things</h1>
        </div>
        <div className={style.Hero__mw2}>
          <p>
            We're npm, Inc., the company behind Node package manager, the npm
            Registry, and npm CLI. We offer those to the community for free, but
            our day job is building and selling useful tools for developers like
            you.
          </p>
        </div>
        <div className={style.Hero__mw2}>
          <h2 className={`${style.Hero__mw2} ${style.Hero__h2}`}>
            Take your JavaScript development up a notch
          </h2>
        </div>
        <div className={style.Hero__mw2}>
          <p>
            Get started today for free, or step up to npm Pro to enjoy a premium
            JavaScript development experience, with features like private
            packages.
          </p>
        </div>
        <div className={`${style.Hero__mw2} ${style.Hero__Btns}`}>
          <button className={style.Hero__SignUpBtn}>Sign up for free</button>
          <button className={style.Hero__LearnProBtn}>Learn about Pro</button>
        </div>
      </div>
    </section>
  );
}
