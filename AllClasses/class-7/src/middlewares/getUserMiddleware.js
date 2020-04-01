import { getUserToBeFiltered } from "../store/actions/usersActions";

const getUserMiddleware = (event) => {
    event.preventDefault();
    return (dispatch) => {
        dispatch(getUserToBeFiltered(event.target))
    }
}

export default getUserMiddleware;