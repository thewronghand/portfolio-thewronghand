import { globalStyle, createMedia } from "@vanilla-extract/css";

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
});

globalStyle("button", {
  background: "none",
  color: "inherit",
  border: "none",
  padding: 0,
  font: "inherit",
  cursor: "pointer",
  outline: "inherit",
});

export const mediaQueries = createMed({
  "screen-sm": "(min-width: 640px)",
  "screen-md": "(min-width: 768px)",
  "screen-lg": "(min-width: 1024px)",
  "screen-xl": "(min-width: 1280px)",
});
