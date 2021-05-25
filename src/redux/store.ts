import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducers from "./RootReducer";

const middleware = [logger];

export const store = createStore(rootReducers, applyMiddleware(...middleware));
