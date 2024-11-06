import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices";
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});
