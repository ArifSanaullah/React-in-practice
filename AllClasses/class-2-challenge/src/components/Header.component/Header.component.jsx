import React, { Component } from "react";
import style from "./Header.module.css";
import propTypes from "prop-types";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handleClick: this.props.handleClick
    };
  }
  render() {
    const nav = ["Home", "About", "Contact", "Services", "Feedback"];
    return (
      <div className={style.Nav}>
        <h1>Logo</h1>
        <ul>
          {nav.map((item, index) => (
            <li key={index} onClick={this.state.handleClick}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Header.propTypes = {
  handleClick: propTypes.func
};
