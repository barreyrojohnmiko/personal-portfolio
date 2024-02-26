import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import portfolioReducers from "./components/portfolio/reducers";
import headerReducers from "./views/header/reducers";

const rootReducer = combineReducers({
  portfolioReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
