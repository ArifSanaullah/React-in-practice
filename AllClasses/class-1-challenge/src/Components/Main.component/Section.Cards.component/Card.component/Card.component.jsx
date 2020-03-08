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
    <div
      className={`${style.Card} 
      ${lightTheme && style.ProductsCardLight} 
        ${isCardForProducts && style.ProductsCard}`}
    >
      {isCardForProducts && (
        <div>
          <h1 className={style.ProductsCardHeader}>{header}</h1>
        </div>
      )}
      <div className={isCardForProducts && style.ProductsCover}>
        <img src={imageURL} alt="" />
      </div>
      <div className={isCardForProducts && style.ProductsHeader}>
        <h1 className={style.Card__h3}>{heading}</h1>
        {isCardForProducts && (
          <div>
            <span className={style.currency}>{currency}</span>
            <h1>{bundleRate}</h1>
            {perDuration &&
              perDuration.map((item, index) => (
                <small key={index}>{item}</small>
              ))}
          </div>
        )}
      </div>
      <div>
        {isCardForProducts ? (
          <div>
            {content &&
              content.map((item, index) => (
                <p key={index} className={style.content}>
                  {item}
                </p>
              ))}
          </div>
        ) : (
          <p>{content}</p>
        )}
      </div>
      <div className={style.CTAContainer} >
        <button
          className={`${style.Card__CTA} 
        ${isCardForProducts && style.ProductsCTA}`}
        >
          {ctaLabel || "learn more"}
        </button>
      </div>
    </div>
  );
}
