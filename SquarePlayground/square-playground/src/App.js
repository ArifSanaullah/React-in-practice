import React from 'react';
import './App.css';
import Square from "./Square"
import SimpleSquare from "./SimpleSquare";
import Hideable from "./Hideable";


const HideableSquare = Hideable(Square);

function App() {
  return (
    <div className="App">
      {/* <SimpleSquare size={50} color="orange" /> */}
      <HideableSquare initialColor="blue" size={100} isHidden={false} />
      <HideableSquare initialColor="brown" size={100} isHidden={true} />
      <HideableSquare initialColor="violet" size={100} isHidden={false} />
      {/* <Square initialColor="green" size={100} />
      <Square initialColor="red" size={200} /> */}
    </div>
  );
}

export default App;
