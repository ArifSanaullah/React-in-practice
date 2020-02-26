import React from "react";
import "./App.css";
import LogIn from "./components/LogIn.component/LogIn.component";
import Header from "./components/Header.component/Header.component";
import About from "./components/Screens.component/About.component/About.component";
import Contact from "./components/Screens.component/Contact.component/Contact.component";
import Feedback from "./components/Screens.component/Feedback.component/Feedback.component";
import Home from "./components/Screens.component/Home.component/Home.component";
import Services from "./components/Screens.component/Services.component/Services.component";
import Footer from "./components/Footer.component/Footer.component";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScreen: "Home",
      loginIsActive: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleIsActive = this.handleIsActive.bind(this);
  }

  handleClick(e) {
    this.changeScreen(e.target.textContent);
  }

  changeScreen(screen) {
    this.setState({ currentScreen: screen });
  }

  handleIsActive() {
    console.log("handleIsActive");
    this.setState({ loginIsActive: false });
  }

  render() {
    const { currentScreen } = this.state;
    return (
      <div className="App">
        <LogIn
          loginIsActive={this.handleIsActive}
          activeHandler={this.handleIsActive}
        />

        {!this.state.loginIsActive && (
          <div>
            <div className="main">
              <Header handleClick={this.handleClick} />
              {currentScreen === "About" && <About />}
              {currentScreen === "Services" && <Services />}
              {currentScreen === "Home" && <Home />}
              {currentScreen === "Contact" && <Contact />}
              {currentScreen === "Feedback" && <Feedback />}
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
