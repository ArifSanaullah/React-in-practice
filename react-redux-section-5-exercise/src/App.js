import React, { Component } from "react";
import "./App.css";
import Square from "./Square";

class App extends Component {
  render() {
    return <Square size={200} color="blue" />;
  }
}

export default App;
