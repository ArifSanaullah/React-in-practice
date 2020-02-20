import React from "react";
import style from "./Cards.module.css";
import Card from "./Card.component/Card.component";
import Description from "./Description.component/Description.component";

const cardsData = [
  {
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwe3pf72xu8874etabgd42-free.png",
    heading: "npm Free",
    content:
      "Become a contributing member of the open source JavaScript community. Create public packages, publish updates, audit your dependencies, and more."
  },
  {
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwfqaa730f88742ka723na-pro.png",
    heading: "npm Pro",
    content:
      "For next-level JavaScript developers who want more capabilities. Pro and Teams add the ability to build private packages for you, your team, or for customers."
  },
  {
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwdz2272xb8874zxys9s9r-enterprise.png",
    heading: "npm Enterprise",
    content:
      "For very large teams and business-critical projects, npm Enterprise delivers features that organizations with hundreds of developers need, like SSO and enhanced security."
  },
  {
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwfyy3mr8vc974k2kjnoyt-teams.png",
    heading: "npm Teams",
    content:
      "Our security team's unique insights into JavaScript vulnerabilities and threats are delivered as free and premium features, as well as services for resellers and others."
  },
  {
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwfu50730r8874b7ah6by4-secure-js.png",
    heading: "npm PkgSafe",
    content:
      "For next-level JavaScript developers who want more capabilities. Pro and Teams add the ability to build private packages for you, your team, or for customers."
  },
  {
    imageURL:
      "https://static.npmjs.com/attachments/ck3uwe3pf72xu8874etabgd42-free.png",
    heading: "npm Free",
    content:
      "Become a contributing member of the open source JavaScript community. Create public packages, publish updates, audit your dependencies, and more."
  }
];

export default function Cards() {
  return (
    <section className={style.Cards}>
      <Description />
      <div className={style.Cards__container}>
        {cardsData.map((item, index) => (
          <Card cardSpecs={item} key={index}></Card>
        ))}
      </div>
    </section>
  );
}
