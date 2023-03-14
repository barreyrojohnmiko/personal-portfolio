import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import homeReducers from "./components/Home/reducers";

const rootReducer = combineReducers({
  homeReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
