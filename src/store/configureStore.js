import { configureStore } from "@reduxjs/toolkit";
import bugReducer from "./bugs"


export default function () {
    return configureStore({reducer: bugReducer});
}