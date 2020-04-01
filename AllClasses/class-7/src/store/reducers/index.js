import { combineReducers } from "redux";
import authReducers from "./authReducers";
import usersReducers from "./usersReducers";
import albumsReducers from "./albumsReducers";

const rootReducer = combineReducers({ authReducers, usersReducers, albumsReducers });

export default rootReducer;
