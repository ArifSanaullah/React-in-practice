import React from "react";
import style from "./Main.module.css";
import Hero from "./Hero.component/Hero.component";
import Cards from "./Section.Cards.component/Cards.component";


export default function Main() {
  return (
    <div className={style.Main}>
      <Hero />
      <Cards />
    </div>
  );
}
