import React from "react";
import { ThemeContext, themes } from "./ThemeContext";
import ThemedButton from "./ThemedButton";
import ThemeToggler from "./ThemeToggler";
import ConsumingMultipleContexts from "./ConsumingMultipleContexts";

function Toolbar(props) {
  //An intermediate component that uses themed button
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}

export default class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme // => now state alos contains the theme updater now state will be down into context provider directly
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme}></Toolbar>
        </ThemeContext.Provider>
        <section>
          <ThemedButton />
            </section>
        <ThemeContext.Provider value={this.state}> {/* The entire state is passed to the provider */}
          <Content />
            </ThemeContext.Provider>
            <ConsumingMultipleContexts />
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeToggler />
    </div>
  );
}
