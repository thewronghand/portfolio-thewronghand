import { style } from "@vanilla-extract/css";

export const skillCardStyle = {
  container: style({
    display: "flex",
    overflow: "hidden",
    marginTop: "2.5rem",
    flexDirection: "column",
    borderRadius: "0.75rem",
    color: "#374151",
    backgroundColor: "#ffffff",
    maxWidth: "320px",
    minWidth: "320px",
    height: "512px",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  }),
  imgSection: style({
    height: "66.666666%",
  }),
  img: style({
    width: "100%",
    pointerEvents: "none",
  }),
  descriptionSection: style({
    padding: "0.5rem",
    marginTop: "0.5rem",
    height: "33.333333%",
  }),
  title: style({ paddingLeft: "0.5rem", fontWeight: 700 }),
  list: style({
    overflowY: "auto",
    padding: "0.75rem",
    paddingLeft: "2.5rem",
    height: "8rem",
    listStyleType: "disc",
  }),
};
