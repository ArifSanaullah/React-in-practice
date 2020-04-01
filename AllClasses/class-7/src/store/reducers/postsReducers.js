import { GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAIL } from "../actionTypes";

const initialState = {
  posts: null,
  errorMessage: "",
  loading: false
};

const postsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        loading: action.payload.loading,
        errorMessage: "",
        posts: null
      };

    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        loading: false,
        errorMessage: ""
      };

    case GET_POSTS_FAIL:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        loading: false,
        posts: null
      };

    default:
      return state;
  }
};

export default postsReducers;
