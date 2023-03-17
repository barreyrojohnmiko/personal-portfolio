import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import homeReducers from "./components/Home/reducers";
import worksReducers from "./components/Works/reducers";

const rootReducer = combineReducers({
  homeReducers,
  worksReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
