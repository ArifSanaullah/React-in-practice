import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_TO_BE_FILTERED
} from "../actionTypes";

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: { loading: true }
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: {
      loading: false,
      users
    }
  };
};

export const getUsersFail = (errorMessage) => {
  return {
    type: GET_USERS_FAIL,
    payload: {
      loading: false,
      errorMessage
    }
  };
};

export const getUserToBeFiltered = (target) => {
  return {
    type: GET_USER_TO_BE_FILTERED,
    payload: {
      username: target.value
    }
  };
};
