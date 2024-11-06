"use client";
import { store } from "./Store";
const { Provider } = require("react-redux");
export function ReduxProvider1({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
