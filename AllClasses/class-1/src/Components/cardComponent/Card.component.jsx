import React from "react";
import { Fragment } from "react";

export default function Card(props) {
  return (
    <Fragment>
      <img src={props.imageURL} alt="" />
      <h1>{props.fullname}</h1>
      <h1>{props.username}</h1>
      <p>{props.description}</p>
    </Fragment>
  );
}