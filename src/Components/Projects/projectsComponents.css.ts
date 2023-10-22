import { style } from "@vanilla-extract/css";
import { mediaQueries } from "../../styles/mediaQueries";

export const projectListStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    "@media": {
      [mediaQueries.SCREEN_MD]: {
        flexDirection: "row",
      },
    },
  }),
  listSectionWrapper: style({
    "@media": {
      [mediaQueries.SCREEN_MD]: {
        width: "50%",
        display: "flex",
        alignItems: "center",
      },
      [mediaQueries.SCREEN_LG]: { marginRight: "2.5rem" },
    },
  }),
  listSection: style({
    width: "100%",
    "@media": {
      [mediaQueries.SCREEN_3XL]: { width: "83%" },
    },
  }),
  titleSection: style({
    display: "flex",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "default",
  }),
  title: style({ paddingBottom: "1rem", fontSize: "3rem", lineHeight: 1 }),
  projectCounter: style({
    marginRight: "1rem",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  }),
  listWrapper: style({
    display: "flex",
    overflowY: "auto",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    flexDirection: "column",
    width: "100%",
  }),
  list: style({
    paddingLeft: 0,
    listStyle: "none",
  }),
};

export const projectListItemStyle = {
  container: style({
    position: "relative",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    width: "100%",
    borderTop: "1px solid currentcolor",
    ":last-child": {
      borderBottom: "1px solid currentcolor",
    },
    "@media": {
      [mediaQueries.SCREEN_LG]: {
        paddingTop: "1.25rem",
        paddingBottom: "1.25rem",
      },
    },
  }),
  listItemSection: style({ display: "flex", justifyContent: "space-between" }),
  motionWrapper: style({
    display: "flex",
    alignItems: "center",
  }),
  arrow: style({
    position: "absolute",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    left: "-1.5rem",
  }),
  title: style({
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    "@media": {
      [mediaQueries.SCREEN_LG]: { fontSize: "1.25rem", lineHeight: "1.75rem" },
    },
  }),
  type: style({
    display: "flex",
    alignItems: "center",
    "@media": {
      [mediaQueries.SCREEN_LG]: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
      },
    },
  }),
};

export const projectListImgSectionStyle = {
  container: style({
    display: "none",
    "@media": {
      [mediaQueries.SCREEN_MD]: {
        display: "flex",
        width: "50%",
        marginTop: "none",
      },
    },
  }),
  imgBackground: style({
    display: "flex",
    marginLeft: "2rem",
    marginRight: "2rem",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    "@media": {
      [mediaQueries.SCREEN_MD]: {
        marginLeft: "0",
        marginRight: ["0", "2.5rem"],
        alignSelf: "flex-end",
        borderTopRightRadius: "1.5rem",
        height: "80%",
      },
      [mediaQueries.SCREEN_LG]: { width: "100%" },
    },
  }),
  imgLogo: style({
    width: "80%",
    "@media": {
      [mediaQueries.SCREEN_3XL]: {
        width: "60%",
      },
    },
  }),
};

export const mobileImgSectionStyle = {
  container: style({
    height: "440px",
    marginTop: "4rem",
    "@media": {
      [mediaQueries.SCREEN_MD]: {
        display: "none",
      },
    },
  }),
  imgBackground: style({
    display: "flex",
    marginLeft: "2rem",
    marginRight: "2rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.75rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  }),
  imgLogo: style({
    width: "80%",
    "@media": {
      [mediaQueries.SCREEN_SM]: {
        width: "60%",
      },
    },
  }),
};
