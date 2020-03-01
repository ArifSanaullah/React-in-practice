import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home.component";
import About from "./components/About/About.component";
import Greeting from "./components/Greeting/Greeting.component";


function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/About" component={About} exact />
          <Route path="/Greeting/:name" component={Greeting} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
