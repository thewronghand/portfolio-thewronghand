import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import menuReducer from "./slices/menuSlice";

const preloadedState = {
  darkMode: sessionStorage.getItem("darkMode") === "true" ? true : false,
};

export const store = configureStore({
  preloadedState,
  reducer: {
    darkMode: darkModeReducer,
    menu: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
