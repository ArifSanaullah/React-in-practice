import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from "./square";
import Exercise from "./Exercise";


// import ClientAxis from "./Exercise";


import SimpleSquare from "./SimpleSquare";
import Hideable from './Hideable';


const HideableSquare = Hideable(Square);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <SimpleSquare color="yellow" size={50} /> */}
        {/* <Square initialColor="red" size={75} /> */}
        <Exercise color="orange" size={75} isHidden="false" />
        {/* <Square initialColor="green" size={100} /> */}
        <Square size={200} initialColor="blue"/>
        {/* <HideableSquare isHidden={true} size={100} color="red"> */}
          {/* {" "} */}
        {/* </HideableSquare> */}
        {/* <HideableSquare isHidden={false} size={100} color="green"> */}
          {/* {" "} */}
        {/* </HideableSquare> */}
        {/* <a href="https://www.google.com" onClick={(e) => {e.preventDefault()}}>Click</a> */}










        {/* <ClientAxis color="blue" width={200} height={200}/> */}
      </header>
    </div>
  );
}

export default App;

