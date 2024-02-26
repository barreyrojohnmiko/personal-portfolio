import "./index.scss";

import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { Store } from "./redux/store";

import App from "./App";

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
