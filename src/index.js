import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import store from "./reduxToolkit/store";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(

    <Provider store={store}>
      <App />
    </Provider>

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

);
