import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from "./square"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Square  />
        <Square initialColor="red" />
        <Square initialColor="green " />
      </header>
    </div>
  );
}

export default App;
