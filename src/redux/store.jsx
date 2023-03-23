import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import homeReducers from "./components/Home/reducers";
import worksReducers from "./components/Works/reducers";
import headerReducers from "./views/header/reducers";

const rootReducer = combineReducers({
  homeReducers,
  worksReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
