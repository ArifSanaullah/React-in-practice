import React from "react";
import "./App.css";
import { connect } from "react-redux";

const changeUserName = (props) => {
  console.log(props);
  return { type: "CHANGE_USERNAME", payload: { user: { name: "Osama" } } };
};

const increment = (prevNum) => {
  return { type: "INCREMENT", payload: { number: prevNum + 1 } };
};
const decrement = (prevNum) => {
  return { type: "INCREMENT", payload: { number: prevNum - 1 } };
};

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.user.name}</h1>
        <button onClick={() => this.props.dispatch(changeUserName(this.props))}>
          Change username
        </button>
        <button
          onClick={() => this.props.dispatch(increment(this.props.number))}
        >
          Increment
        </button>
        <button
          onClick={() => this.props.dispatch(decrement(this.props.number))}
        >
          Decrement
        </button>
        <h1>{this.props.number}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
