import React, { Component } from "react";
import Button from "../Button.component/Button.component";

export default class ToDoItem extends Component {
  render() {
    return (
      <div>
        <li>{this.props.todo}</li>{" "}
        <Button
          buttonValue="Delete Todo"
          clickHandler={this.props.deleteHandler}
        />
      </div>
    );
  }
}
