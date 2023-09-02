import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";

const preloadedState = {
  darkMode: sessionStorage.getItem("darkMode") === "true" ? true : false,
};

export const store = configureStore({
  preloadedState,
  reducer: {
    darkMode: darkModeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
