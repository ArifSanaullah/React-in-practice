import React from "react";
import "./App.css";
import authMiddleware from "./middlewares/authMiddlewares";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.authMiddleware()}>Get Data</button>
        {this.props.authReducers.loading && <div>Loading data</div>}
        {this.props.authReducers.users ? (
          this.props.authReducers.users.map((post, index) => {
            return (
              <div key={index}>
                <h3>Post ID: {post.id}</h3>
                <h3>User ID: {post.userId}</h3>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <br />
                <br />
              </div>
            );
          })
        ) : (
          <div>{this.props.authReducers.errorMessage}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    authMiddleware: () => dispatch(authMiddleware())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
