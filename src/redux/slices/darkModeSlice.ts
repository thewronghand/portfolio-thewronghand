import { createSlice } from "@reduxjs/toolkit";

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: false,
  reducers: {
    setDarkMode: (_state, action) => action.payload,
    toggleDarkMode: (state) => !state,
  },
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
