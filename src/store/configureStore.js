import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";


export default function () {
    return configureStore({
        reducer: reducer,
        middleware: [
            ...getDefaultMiddleware(),
            logger("console")
        ]
        // middleware: [logger("console"), func]
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