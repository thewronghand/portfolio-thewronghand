import { style } from "@vanilla-extract/css";
import { youngSerifFont } from "../styles/fonts.css";

export const mainStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    transitionProperty: "all",
    transitionTimingFunction: [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0.4, 0, 0.2, 1)",
    ],
    transitionDuration: ["300ms", "300ms"],
  }),
  intro: style({
    width: "60%",
    textAlign: "center",
  }),
  usernameSpan: style({
    fontFamily: youngSerifFont,
    fontSize: "0.75rem",
    lineHeight: "1rem",
  }),
};
