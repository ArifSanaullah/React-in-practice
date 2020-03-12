import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { increment, decrement } from "./actions";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.number}
        <button
          onClick={() => this.props.dispatch(increment(this.state.number))}
        >
          increment
        </button>
        <button
          onClick={() => this.props.dispatch(decrement(this.state.number))}
        >
          decrement
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
