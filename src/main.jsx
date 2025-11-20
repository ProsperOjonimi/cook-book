import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getMeals } from "./services/apiRecipes.js";
import { Provider } from "react-redux";
import store from "./Store.js";

console.log(store);

console.log(getMeals());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
