import React, { Fragment } from "react";
import Card from "./Card.component";

export default function Cards() {
    const cardsData = [
      {
        imageURL: "https://dummyimage.com/200x300/000000/fff",
        description: "Description one",
        fullname: "Arif Sanaullah",
        username: "arifsanaullah"
      },
      {
        imageURL: "https://dummyimage.com/200x300/000000/fff",
        description: "Description Two",
        fullname: "Abid Mukhtar",
        username: "abidmukhtar"
      }
    ];
    return (
        <Fragment>
            {cardsData.map((item, index) => <Card {...item} key={index} />)}
        </Fragment>
    )
}