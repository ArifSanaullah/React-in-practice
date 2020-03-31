import * as authActions from "../store/actions/authActions";
import axios from "axios";

const SERVER_PATH = "https://jsonplaceholder.typicode.com/posts";

const authMiddleware = () => {
  return (dispatch) => {
    dispatch(authActions.userLogin());
    axios
      .get(SERVER_PATH)
      .then((resp) => {
        dispatch(authActions.userLoginSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(authActions.userLoginFail(err.message));
      });
  };
};

export default authMiddleware;
