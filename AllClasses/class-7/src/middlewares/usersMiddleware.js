import * as usersActions from "../store/actions/usersActions";
import axios from "axios";

const SERVER_PATH = "https://jsonplaceholder.typicode.com/users";

const usersMiddleware = () => {
  return (dispatch) => {
    dispatch(usersActions.getUsers());
    axios
      .get(SERVER_PATH)
      .then((resp) => {
        dispatch(usersActions.getUsersSuccess(resp.data));
      })
      .catch((err) => {
        dispatch(usersActions.getUsersFail(err.message));
      });
  };
};

export default usersMiddleware;
