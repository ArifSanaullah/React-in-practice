import React, { Component } from "react";
import { ThemeContext } from "./ThemeContext";

export class ThemedButton extends Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background, color: theme.foreground }}
      >
        Change Theme
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;
