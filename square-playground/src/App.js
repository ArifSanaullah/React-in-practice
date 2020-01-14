import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from "./square";
import SimpleSquare from "./SimpleSquare"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SimpleSquare  color="yellow" size={50} />
        <Square initialColor="red" size={75}/>
        <Square  initialColor="green" size={100} />
      </header>
    </div>
  );
}

export default App;

