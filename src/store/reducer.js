import { combineReducers } from "@reduxjs/toolkit";

import bugReducer from "./bugs";
import projectReducer from "./projects";
import userReducer from "./users";

export default combineReducers({
    bugs: bugReducer,
    projects: projectReducer,
    users: userReducer
})