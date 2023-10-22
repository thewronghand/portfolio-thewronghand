import { style } from "@vanilla-extract/css";
import { moricFont, youngSerifFont } from "../../styles/fonts.css";
import { mediaQueries } from "../../styles/mediaQueries";

export const headerStyle = {
  container: style({
    position: "fixed",
    display: "flex",
    top: "0",
    left: "0",
    zIndex: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "4rem",
  }),
  mixBlend: style({
    mixBlendMode: "difference",
  }),
  logoContainer: style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "10rem",
    marginLeft: "1.25rem",
  }),
  buttonContainer: style({
    display: "flex",
    padding: "1.25rem",
    justifyContent: "space-around",
    alignItems: "center",
    width: "11rem",
    marginTop: "0.25rem",
  }),
};

export const colorButtonStyle = {
  button: style({
    fontFamily: youngSerifFont,
    cursor: "pointer",
    marginTop: "-0.75rem",
  }),
  modal: style({
    fontFamily: youngSerifFont,
    display: "flex",
    position: "fixed",
    top: "3rem",
    right: "6rem",
    zIndex: 50,
    padding: "0.5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    flexDirection: "column",
    borderRadius: "0.5rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  }),
};

export const navStyle = {
  container: style({
    display: "flex",
    position: "fixed",
    zIndex: 10,
    marginTop: "0",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    fontSize: "3rem",
    lineHeight: 1,
    transitionProperty: "all",
    transitionTimingFunction: [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0.4, 0, 0.2, 1)",
    ],
    transitionDuration: ["300ms", "300ms"],
  }),
  list: style({ fontFamily: moricFont, fontWeight: 700 }),
};

export const navItemStyle = {
  container: style({ display: "flex", alignItems: "center" }),
  number: style({
    marginRight: "1rem",
    marginTop: "1.5rem",
    height: "100%",
    fontSize: "0.75rem",
    lineHeight: "1rem",
    cursor: "default",
    "@media": {
      [mediaQueries.SCREEN_SM]: { fontSize: "0.75rem", lineHeight: "1rem" },
      [mediaQueries.SCREEN_MD]: {
        marginTop: "2.5rem",
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
      },
      [mediaQueries.SCREEN_LG]: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
      },
      [mediaQueries.SCREEN_XL]: {
        marginTop: "3rem",
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
  }),
  link: style({
    position: "relative",
  }),
  shadowTitle: style({
    fontSize: "60px",
    position: "absolute",
    top: 0,
    left: 0,
    textShadow:
      "-1px 0px currentcolor, 0px 1px currentcolor, 1px 0px currentcolor, 0px -1px currentcolor",

    "@media": {
      [mediaQueries.SCREEN_SM]: {
        fontSize: "80px",
      },
      [mediaQueries.SCREEN_MD]: {
        fontSize: "90px",
      },
      [mediaQueries.SCREEN_LG]: {
        fontSize: "100px",
      },
    },
  }),

  title: style({
    fontSize: "60px",
    position: "relative",
    ":hover": {
      filter: "invert(1)",
    },
    "@media": {
      [mediaQueries.SCREEN_SM]: {
        fontSize: "80px",
      },
      [mediaQueries.SCREEN_MD]: {
        fontSize: "90px",
      },
      [mediaQueries.SCREEN_LG]: {
        fontSize: "100px",
      },
    },
  }),
};
