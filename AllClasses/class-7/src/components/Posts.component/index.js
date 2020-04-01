import React, { Component } from "react";
import postsMiddlewares from "../../middlewares/postsMiddlewares";
import { connect } from "react-redux";

class Posts extends Component {
  render() {
    const { postsMiddlewares, loading, posts, errorMessage } = this.props;
    console.log(posts);
    return (
      <div>
        <button onClick={() => postsMiddlewares()}>Get Posts</button>
        <form action="">
          <select name="posts" id="posts">
            <option value="arif">Arif</option>
          </select>
        </form>
        {loading && <div>Loading data</div>}
        {posts ? (
          posts.map((post, index) => {
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

const mapStateToProps = (state) => state.postsReducers;

const mapDispatchToProps = (dispatch) => ({
  postsMiddlewares: () => dispatch(postsMiddlewares())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
