import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import homeReducers from "./components/home/reducers";
import headerReducers from "./views/header/reducers";

const rootReducer = combineReducers({
  homeReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
