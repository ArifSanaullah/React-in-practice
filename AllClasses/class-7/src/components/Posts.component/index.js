import React, { Component } from "react";
import authMiddleware from "../../middlewares/authMiddlewares";
import { connect } from "react-redux";

class Posts extends Component {
  render() {
    const { authMiddleware, loading, users, errorMessage } = this.props;
    return (
      <div>
        <button onClick={() => authMiddleware()}>Get Posts</button>
        {loading && <div>Loading data</div>}
        {users ? (
          users.map((post, index) => {
            const { id, userId, title, body } = post;
            return (
              <div key={index}>
                <h3>Post ID: {id}</h3>
                <h3>User ID: {userId}</h3>
                <h1>{title}</h1>
                <p>{body}</p>
                <br />
                <br />
              </div>
            );
          })
        ) : (
          <div>{errorMessage}</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state.authReducers;

const mapDispatchToProps = (dispatch) => ({
  authMiddleware: () => dispatch(authMiddleware())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
