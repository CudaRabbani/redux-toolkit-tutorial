import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";


export default function () {
    return configureStore({
        reducer: reducer,
        middleware: [logger("console")]
        // middleware: [logger({key: 'value'})]
    });
}

//if we are not using the redux toolkit, then use following piece of code
/**
 import {createStore, applyMiddleware} from "redux";
 import reducer from "./reducer";
 import logger
 export default store = createStore(reducer, applyMiddleware(logger));
 */