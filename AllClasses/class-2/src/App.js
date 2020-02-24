import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name] : [e.target.value]})
  }

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleChange}
          name="username"
        />
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        />
        <p>{this.state.username}{this.state.password}</p>
      </div>
    );
  }
}

