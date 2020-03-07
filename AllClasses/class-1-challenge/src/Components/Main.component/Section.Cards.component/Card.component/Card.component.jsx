import React from "react";
import style from "./Card.module.css";

export default function Card({ cardSpecs }) {
  const {
    imageURL,
    heading,
    content,
    isCardForProducts,
    header,
    bundleRate,
    currency,
    perDuration,
    ctaLabel,
    lightTheme
  } = cardSpecs;
  return (
    <div className={`${style.Card} ${lightTheme && style.ProductsCardLight} ${style.ProductsCard} `}>
      {isCardForProducts && (
        <div>
          <h1 className={style.ProductsCardHeader}>{header}</h1>
        </div>
      )}
      <div className={isCardForProducts && style.ProductsCover}>
        <img src={imageURL} alt="" />
      </div>
      <div className={style.ProductsHeader}>
        <h1 className={style.Card__h3}>{heading}</h1>
        {isCardForProducts && (
          <div>
            <span>{currency}</span>
            <h1>{bundleRate}</h1>
            <span>{perDuration}</span>
          </div>
        )}
      </div>
      <div>
        {isCardForProducts ? (
          <div>
            {content && content.map((item, index) => <p key={index}>{item}</p>)}
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
      <div>
        <button className={style.Card__CTA}>{ctaLabel || "learn more"}</button>
      </div>
    </div>
  );
}
