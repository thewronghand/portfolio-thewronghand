import { style } from "@vanilla-extract/css";

export const grainCanvas = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  opacity: 0.05,
  zIndex: 50,
  pointerEvents: "none",
});
