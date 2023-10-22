import { style } from "@vanilla-extract/css";
import { youngSerifFont } from "../../styles/fonts.css";

export const blogIntroStyle = {
  container: style({ marginLeft: "4rem", marginRight: "4rem" }),
  titleSection: style({
    display: "flex",
    alignItems: "center",
    fontSize: "3rem",
    lineHeight: 1,
  }),
  title: style({
    paddingTop: "0.5rem",
    marginLeft: "0.25rem",
    cursor: "default",
    fontFamily: youngSerifFont,
  }),
  description: style({
    marginTop: "1.5rem",
  }),
};
