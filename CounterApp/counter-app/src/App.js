import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Counter"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter initialNumber={0} />
        <Counter initialNumber={-10} />
        <Counter initialNumber={5} />
        <Counter initialNumber={45} />
      </header>
    </div>
  );
}

export default App;
