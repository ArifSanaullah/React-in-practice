import React from "react";
import style from "./Pagination.module.css";
import propTypes from "prop-types";
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: this.props.buttons
    };
  }

  render() {
    const lastLi = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="13 17 18 12 13 7"></polyline>
        <polyline points="6 17 11 12 6 7"></polyline>
      </svg>
    );
    const firstLi = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="11 17 6 12 11 7"></polyline>
        <polyline points="18 17 13 12 18 7"></polyline>
      </svg>
    );
    this.state.buttons.push(lastLi);
    this.state.buttons.unshift(firstLi)
    return (
      <section className={style.Pagination}>
        <ul className={style.paginationContainer}>
          {this.state.buttons.map((btn, index) => {
            return (
              <li key={index + 1}>
                <button key={index + 1}>{btn}</button>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

Pagination.defaultProps = {
  buttons: [1, 2, 3, 4, 5, 6, 7]
};
