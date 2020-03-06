import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/NavMenu.component/NavBar.component";
import Main from "./Components/Main.component/Main.component";
import Footer from "./Components/Footer.component/Footer.component";
import { navItems } from "./Components/NavMenu.component/NavBar.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          {navItems.map((item, index) => (
            <Route exact path={`/${item.title.toLowerCase()}`} key={index}>
              {item.route}
            </Route>
          ))}
        </Switch>
        <Footer />
        {/* Poppins font link */}
        <link
          href="https://fonts.googleapis.com/css?family=Arimo|Poppins:400,600,700&amp;display=swap"
          rel="stylesheet"
        />
      </div>
    </Router>
  );
}

export default App;
