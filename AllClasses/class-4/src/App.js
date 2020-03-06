import React from "react";
import "./App.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.fiveTimes = this.fiveTimes.bind(this);
  }

  increment() {
    // this.setState(prevState => {
    //   console.log(prevState);
    //   return {
    //     count: prevState.count + 1
    //   }
    // });
    this.setState({ count: this.state.count + 1 });
    console.log(this.state);
  }

  fiveTimes() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <button onClick={() => this.fiveTimes()}>Increment</button>
      </div>
    );
  }
}

function App() {
  return <Counter />;
}

export default App;
