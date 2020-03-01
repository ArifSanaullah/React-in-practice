import React, { Component } from "react";
import Product from "../Product.component/Product.component";
import Provider, {MyContext} from "../../Context";

export default class MainContent extends Component {
  render() {
    return (
      <MyContext.Consumer>
        <Product title="iPhone 6" price={20000} />
      </MyContext.Consumer>
    );
  }
}
