import { combineReducers } from "redux";

import authReducers from "./AuthReducer";
import chatReducer from "./ChatUserReducer";
import postReducer from "./PostReducer";

export const reducers = combineReducers({ authReducers, postReducer, chatReducer });
