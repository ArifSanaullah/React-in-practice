import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: this.props.initialNumber
    };
  }

  increment() {
    this.setState(prevState => ({
      currentNumber: prevState.currentNumber + 1
    }));
  }

  decrement() {
    if (this.state.currentNumber > this.props.initialNumber) {
      this.setState(prevState => ({
        currentNumber: prevState.currentNumber - 1
      }));
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.currentNumber}</span>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}
