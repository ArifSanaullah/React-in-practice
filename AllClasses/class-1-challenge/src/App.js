import React from 'react';
import './App.css';
import Header from "./Components/NavMenu.component/NavBar.component";
import Main from "./Components/Main.component/Main.component";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Main />
      
      {/* Poppins font link */}
      <link href="https://fonts.googleapis.com/css?family=Arimo|Poppins:400,600,700&amp;display=swap" rel="stylesheet"></link>
    </div>
  );
}

export default App;