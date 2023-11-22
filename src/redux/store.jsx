import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import homeReducers from "./components/home/reducers";
import projectsReducers from "./components/projects/reducers";
import headerReducers from "./views/header/reducers";

const rootReducer = combineReducers({
  homeReducers,
  projectsReducers,
  headerReducers,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
