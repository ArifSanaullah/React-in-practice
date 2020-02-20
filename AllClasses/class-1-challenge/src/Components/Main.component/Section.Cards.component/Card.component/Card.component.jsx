import React from "react";
import style from "./Card.module.css";

export default function Card({ cardSpecs }) {
  return (
    <div className={style.Card}>
      <div>
        <img src={cardSpecs.imageURL} alt="" />
      </div>
      <h3 className={style.Card__h3}>{cardSpecs.heading}</h3>
      <div>
        <p>{cardSpecs.content}</p>
      </div>
      <button className={style.Card__LearnBtn}>Learn More</button>
    </div>
  );
}
