import React from "react";
import style from "./Filter.module.css";
import propTypes from "prop-types";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      listItems: this.props.listItems,
      filterLabel: this.props.filterLabel,
      placeholder: this.props.placeholder,
      isShown: this.props.isShown,
    };
    this.showList = this.showList.bind(this);
  }

  showList() {
    this.setState(prevState => {
      const ownProps = { ...prevState };
      const prevVisibilty = ownProps.isShown;
      delete ownProps.isShown;
      return {
        ...ownProps,
        isShown: !prevVisibilty
      };
    });
  }

  render() {
    return (
      <div className={style.Filter}>
        <span className={style.filterContainer}>
          <div className={style.filterButton}>
            <span className={style.filterLabel}>{this.state.filterLabel}</span>
            <button
              className={`${style.dropDown} dropDownButton`}
              onClick={this.showList}
            >
              <label
                htmlFor="downshift-input"
                className={style.filterPlaceholder}
              >
                {this.state.placeholder}
                <svg
                  className={`${
                    this.state.isShown
                      ? style.filterDownIconAnimated
                      : style.filterDownIcon
                  }`}
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
          <ul
            className={`${
              this.state.isShown
                ? style.dropDownListAnimated
                : style.dropDownList
            }`}
          >
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

Filter.propTypes = {
  listItems: propTypes.array,
  filterLabel: propTypes.string,
  placeholder: propTypes.string,
  isShown: propTypes.bool
};

Filter.defaultProps = {
  isShown: false
};

