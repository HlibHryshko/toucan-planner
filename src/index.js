import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { genSaltSync } from "bcryptjs";

const el = document.getElementById("root");
const root = createRoot(el);

export const salt = genSaltSync(10);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
