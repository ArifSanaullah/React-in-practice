import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL
} from "../actionTypes";

export const userLogin = () => {
  return {
    type: USER_LOGIN,
    payload: {
      loading: true
    }
  };
};

export const userLoginSuccess = (users) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: {
      users
    }
  };
};

export const userLoginFail = (errorMessage) => {
  return {
    type: USER_LOGIN_FAIL,
    payload: {
      errorMessage
    }
  };
};
