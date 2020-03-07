import React from "react";
import style from "./Pricing.module.css";
import Card from "../../../Components/Main.component/Section.Cards.component/Card.component/Card.component";

const cardsData = [
  {
    isCardForProducts: true,
    header: "for public package authors",
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwe3pf72xu8874etabgd42-free.png",
    heading: "Free",
    currency: "$",
    bundleRate: "0",
    perDuration: "",
    content: ["Unlimited public packages"],
        ctaLabel: "create",
    lightTheme: false
  },
  {
    isCardForProducts: true,
    header: "for individual creators",
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwg119mt16dr740oqtw1be-wombat-header-pro.png",
    heading: "Pro",
    currency: "$",
    bundleRate: "7",
    perDuration: "per month",
    content: [
      "Unlimited public packages",
      "Unlimited private packages",
      "Package-based permissions"
    ],
      ctaLabel: "get started",
    lightTheme: true
  },
  {
    isCardForProducts: true,
    header: "for teams & orgnizations",
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwg1fkmr9tc97498op7ljg-wombat-header-teams.png",
    heading: "Teams",
    currency: "$",
    bundleRate: "7",
    perDuration: "per user per month",
    content: [
      "Unlimited public packages",
      "Unlimited private packages",
      "Team-based permissions"
    ],
      ctaLabel: "get started",
    lightTheme: true
  },
  {
    isCardForProducts: true,
    header: "the ultimate in enterprise javascript",
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwdz2272xb8874zxys9s9r-enterprise.png",
    heading: "Eterprise",
    currency: "$",
    bundleRate: "10K",
    perDuration: "per month",
    content: "",
      ctaLabel: "contact sales",
    lightTheme: false
  }
];

export default function Pricing() {
  return (
    <section className={`herobg ${style.PricingHero}`}>
      <div className={style.Pricing}>
        <div>
          <h1>Pricing</h1>
        </div>
        <div className={style.ProductsCards}>
          {cardsData.map((card, index) => (
            <div key={index} className={`${style.ProductsCard}` + index}>
              <Card cardSpecs={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
