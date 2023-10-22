import { style } from "@vanilla-extract/css";
import { mediaQueries } from "../../styles/mediaQueries";

export const profileBoxStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
  }),
  title: style({
    paddingBottom: "1.25rem",
    marginBottom: "2.5rem",
    borderBottom: "2px solid currentcolor",
    width: "100%",
    fontSize: "3rem",
    lineHeight: 1,
    cursor: "default",
  }),
  description: style({
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "100%",
    lineHeight: "1.75rem",
    "@media": {
      [mediaQueries.SCREEN_MD]: { width: "95%" },
    },
  }),
};
