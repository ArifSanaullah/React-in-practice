import React, { Component } from "react";
import propTypes from "prop-types";
import {MyContext} from "../../Context";
import { getCurrencySymbol, convertCurrency } from "../currency";

export default class Product extends Component {
  render() {
    const { title, price } = this.props;
    const { currecny } = this.context;
    console.log(this.context);
    return (
      <MyContext.Consumer>
        <div>
          <h1>{title}</h1>
          <img
            src="https://dummyimage.com/200x200/000/fff&text=Image+coming+soon"
            alt=""
          />
          <div>
            <div>
              {getCurrencySymbol(currecny)}
              {convertCurrency(price, currecny)}
            </div>
            <button>Add to Cart</button>
          </div>
        </div>
      </MyContext.Consumer>
    );
  }
}

Product.contextType = {
  currency: propTypes.string
};
