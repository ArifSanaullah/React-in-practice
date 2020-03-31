import * as authActions from "../actionTypes";

const initialState = {
  users: null,
  errorMessage: "",
  loading: false
};

const authReducers = (state = initialState, action) => {
  switch (action.type) {
    case authActions.USER_LOGIN:
      return {
        ...state,
        loading: action.payload.loading,
        errorMessage: "",
        users: null
      };

    case authActions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        loading: false,
        errorMessage: ""
      };

    case authActions.USER_LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        loading: false,
        users: null
      };

    default:
      return state;
  }
};

export default authReducers;
