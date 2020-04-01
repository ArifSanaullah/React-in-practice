import * as postsActions from "../store/actions/postsActions";
import axios from "axios";

const SERVER_PATH = "https://jsonplaceholder.typicode.com/posts";

const authMiddleware = () => {
  return (dispatch) => {
    dispatch(postsActions.getPosts());
    axios
      .get(SERVER_PATH)
      .then((resp) => {
        dispatch(postsActions.getPostsSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(postsActions.getPostsFail(err.message));
      });
  };
};

export default authMiddleware;
