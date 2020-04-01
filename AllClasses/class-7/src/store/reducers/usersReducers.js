import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_TO_BE_FILTERED
} from "../actionTypes";

const initialState = {
  users: null,
  errorMessage: "",
  loading: false,
  userToBeFiltered: ""
};

const usersReducers = (state = initialState, action) => {
  switch (action.type) {

    case GET_USERS:
      return {
        ...state,
        loading: action.payload.loading
      };
    
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: action.payload.loading
      };
    
    case GET_USERS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        loading: action.payload.loading
      };
    
    case GET_USER_TO_BE_FILTERED:
      return {
        ...state,
        userToBeFiltered: action.payload.username
      }
    
    default:
      return state;
  }
};

export default usersReducers;
