import React from "react";
import style from "./Main.module.css";
import Hero from "./Hero.component/Hero.component";
import Cards from "./Section.Cards.component/Cards.component";
import LOSS from "./Section.LoveOSS.component/LOSS.component";
import Companies from "./Section.Companies.component/Companies.component";


export default function Main() {
  return (
    <div className={style.Main}>
      <Hero />
      <Cards />
      <LOSS />
      <Companies />
    </div>
  );
}
