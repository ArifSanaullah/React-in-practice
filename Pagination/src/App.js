import React from "react";
import "./App.css";
import Header from "./components/Header.component/Header.component";
import Main from "./components/Main.component/Main.component";
import Footer from "./components/Footer.component/Footer.component";
import TodosPagination from "./components/Main.component/Pagination.component/TodosPagination/TodosPagination.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <TodosPagination />
      <Footer
        footerItems={[
          "About",
          "Setting",
          "Help",
          "API Documentation",
          "Hacker News",
          "Fork/Contribute",
          "Cool Apps"
        ]}
      />
    </div>
  );
}

export default App;
