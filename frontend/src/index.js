import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import App from "./App";
import store from "./state/store"; // Import your Redux store
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}> {/* Wrap your app with Provider */}
    <App />
  </Provider>
);
