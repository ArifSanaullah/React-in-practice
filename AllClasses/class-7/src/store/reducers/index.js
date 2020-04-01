import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import usersReducers from "./usersReducers";
import albumsReducers from "./albumsReducers";

const rootReducer = combineReducers({ postsReducers, usersReducers, albumsReducers });

export default rootReducer;
