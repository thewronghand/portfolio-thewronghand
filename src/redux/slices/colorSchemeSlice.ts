import { createSlice } from "@reduxjs/toolkit";
import { COLOR_SCHEMES } from "../../utils/constant";

const savedColorScheme = sessionStorage.getItem("colorScheme");

const initialState = savedColorScheme
  ? COLOR_SCHEMES[savedColorScheme as keyof typeof COLOR_SCHEMES]
  : COLOR_SCHEMES.HARBOR;

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState: initialState,
  reducers: {
    setColorScheme: (_state, action) => {
      const schemeName = Object.keys(COLOR_SCHEMES).find(
        (key) =>
          COLOR_SCHEMES[key as keyof typeof COLOR_SCHEMES] === action.payload
      );
      if (schemeName) {
        sessionStorage.setItem("colorScheme", schemeName);
      }
      return action.payload;
    },
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export default colorSchemeSlice.reducer;
