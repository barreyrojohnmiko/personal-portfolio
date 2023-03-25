import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { Store } from "./redux/store";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Provider store={Store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
