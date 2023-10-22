import { style } from "@vanilla-extract/css";
import { youngSerifFont } from "../../styles/fonts.css";

export const logoStyle = {
  vertical: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }),
  horizontal: style({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }),
  logoText: style({
    fontFamily: youngSerifFont,
    cursor: "default",
  }),
  logoTextStatic: style({
    fontFamily: youngSerifFont,
    cursor: "pointer",
  }),
  logoTextVertical: style({
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    marginTop: "0.75rem",
  }),
};
