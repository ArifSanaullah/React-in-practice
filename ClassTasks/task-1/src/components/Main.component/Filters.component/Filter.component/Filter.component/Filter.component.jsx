import React from "react";
import style from "./Filter.module.css";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: this.props.listItems,
      filterLabel: this.props.filterLabel,
      placeholder: this.props.placeholder
    };
  }
  render() {
    return (
      <div className={style.Filter}>
        <span className={style.filterContainer}>
          <div className={style.filterButton}>
            <span className={style.filterLabel}>{this.state.filterLabel}</span>
            <button className={`${style.dropDown} dropDownButton`}>
              <label
                htmlFor="downshift-input"
                className={style.filterPlaceholder}
              >
                {this.state.placeholder}
                <svg
                  className={style.filterDownIcon}
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </label>
            </button>
          </div>
          <ul className={`${style.dropDownList} dropList`}>
            {this.state.listItems.map((item, index) => {
              return (
                <li
                  id={`downshift-${index}`}
                  className={style.dropDownListItem}
                  key={index}
                >
                  <button className={style.dropDownListItemBtn}>{item}</button>
                </li>
              );
            })}
          </ul>
        </span>
      </div>
    );
  }
}

// const lists = document.querySelectorAll(style.dropDownList);
const dropDownIcons = document.querySelectorAll(".dropDownButton");
console.log(dropDownIcons);
