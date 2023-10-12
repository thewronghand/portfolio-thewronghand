import { createSlice } from "@reduxjs/toolkit";
import { COLOR_SCHEMES } from "../../utils/constant";

export const colorSchemeSlice = createSlice({
  name: "colorScheme",
  initialState: COLOR_SCHEMES.TIEFENWALD,
  reducers: {
    setColorScheme: (_state, action) => action.payload,
  },
});

export const { setColorScheme } = colorSchemeSlice.actions;

export default colorSchemeSlice.reducer;
