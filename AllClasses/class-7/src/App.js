import React from "react";
import "./App.css";
import Albums from "./components/Albums.component";
import Posts from "./components/Posts.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Albums />
        <Posts />
      </div>
    );
  }
}

export default App;
