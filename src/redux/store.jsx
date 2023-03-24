import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import homeReducers from "./components/home/reducers";
import worksReducers from "./components/works/reducers";
import headerReducers from "./views/header/reducers";

const rootReducer = combineReducers({
  homeReducers,
  worksReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
