import React from "react";
import logo from "./assets/logo.svg";
import Card from "./Card";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({ property }) => {
  return (
    <div className="page">
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Transition Group classes breakdown.</h1>
      </section>

      <TransitionGroup className="card-container">
        {/* replace classNames="slide" with classNames="fade" to see fade animation */}
        {/* when using TransitionGroup a unique key is required on CSSTransition */}
        <CSSTransition timeout={450} classNames="slide" key={property._id}>
          <Card property={property} />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Home;
