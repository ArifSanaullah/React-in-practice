import React, { Component } from "react";
import propTypes from "prop-types";
import {MyContext} from "../Context";
import Header from "./Header.component/Header.component";
import SideBar from "./SideBar.component/SideBar.component";
import MainContent from "./MainContent.component/MainContent.component";
import Basket from "./Basket.component/Basket.component";

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: "pkr"
    };
  } 
  getChildContext() {
    return {
      currency: this.state.currency
    };
  }
  render() {
    return (
      
        <div className="page">
          <Header />
          <div className="layout">
            <SideBar />
            <MainContent />
            <Basket />
          </div>
        </div>
    );
  }
}

Page.childContextTypes = {
  currency: propTypes.string
};
