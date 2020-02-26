import React, { Component } from "react";
import propTypes from "prop-types";
import Home from "../Screens.component/Home.component/Home.component";
import About from "../Screens.component/About.component/About.component";
import Contact from "../Screens.component/Contact.component/Contact.component";
import Services from "../Screens.component/Services.component/Services.component";
import Feedback from "../Screens.component/Feedback.component/Feedback.component";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.isActive
    }
    this.handleClick = this.handleClick.bind(this);
  }



  render() {
    if (this.state.isActive) {
      return <div>
        
      </div>;
    } else return null;
  }
}

Main.propTypes = {
  isActive: propTypes.bool
}