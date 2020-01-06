import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Counter initialNumber={2}> </Counter>
          <Counter initialNumber={-10}> </Counter>
          <Counter initialNumber={30}> </Counter>
          <Counter initialNumber={20}> </Counter>
        </div>
      </header>
    </div>
  );
}

export default App;
