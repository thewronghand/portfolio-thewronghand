import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./slices/darkModeSlice";
import menuReducer from "./slices/menuSlice";
import colorSchemeReducer from "./slices/colorSchemeSlice";

const preloadedState = {
  darkMode: sessionStorage.getItem("darkMode") === "true" ? true : false,
};

export const store = configureStore({
  preloadedState,
  reducer: {
    darkMode: darkModeReducer,
    menu: menuReducer,
    colorScheme: colorSchemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
