import { style } from "@vanilla-extract/css";
import { mediaQueries } from "../../../styles/mediaQueries";

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
    minHeight: "66.666666%",
  }),
  img: style({
    width: "100%",
    pointerEvents: "none",
  }),
  descriptionSection: style({
    padding: "0.5rem",
    marginTop: "0.5rem",
    minHeight: "33.333333%",
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

export const skillListStyle = {
  container: style({
    display: "none",
    listStyle: "none",
    padding: "0.75rem",
    borderRadius: "0.75rem",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    width: "320px",
    "@media": {
      [mediaQueries.SCREEN_SM]: { display: "block" },
      [mediaQueries.SCREEN_MD]: {
        marginTop: "0",
      },
      [mediaQueries.SCREEN_2XL]: { display: "none" },
      [mediaQueries.SCREEN_5XL]: { display: "block", width: "100%" },
    },
  }),
  skillSetTitle: style({
    cursor: "default",
    margin: "0.5rem",
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  }),
  list: style({
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    paddingLeft: "0",
  }),
  item: style({
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    marginLeft: "0.25rem",
    marginRight: "0.25rem",
    borderRadius: "0.375rem",
    transitionProperty: "all",
    transitionTimingFunction: [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0.4, 0, 0.2, 1)",
    ],
    transitionDuration: "300ms",
    cursor: "pointer",
    ":hover": { backgroundColor: "#AFD3FF" },
  }),
  itemSelected: style({
    color: "#ffffff",
    backgroundColor: "#60A5FA",
    cursor: "default",
    ":hover": { backgroundColor: "#60A5FA", cursor: "default" },
  }),
};

export const mobileSkillListStyle = {
  container: style({
    display: "flex",
    padding: "0.5rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    flexDirection: "row",
    borderRadius: "0.75rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "@media": {
      [mediaQueries.SCREEN_SM]: { display: "none" },
      [mediaQueries.SCREEN_2XL]: { display: "inline-flex" },
      [mediaQueries.SCREEN_5XL]: { display: "none" },
    },
  }),
  skillSetList: style({
    marginRight: "0.5rem",
    width: "50%",
    listStyle: "none",
    padding: 0,
  }),
  skillSetItem: style({
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    borderRadius: "0.5rem",
    cursor: "pointer",
    padding: "2px",
    margin: "1px",
    ":hover": { backgroundColor: "#93C5FD" },
  }),
  skillSetItemSelected: style({
    backgroundColor: "#60A5FA",
    cursor: "default",
    ":hover": { backgroundColor: "#60A5FA" },
  }),
  skillItemList: style({
    display: "flex",
    flexDirection: "column",
    width: "50%",
    listStyle: "none",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: 0,
  }),
  skillItem: style({
    padding: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    marginBottom: "0.25rem",
    borderRadius: "1rem",
    color: "#ffffff",
    transitionProperty: "all",
    transitionTimingFunction: [
      "cubic-bezier(0.4, 0, 0.2, 1)",
      "cubic-bezier(0.4, 0, 0.2, 1)",
    ],
    transitionDuration: ["300ms", "300ms"],
    cursor: "pointer",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    margin: "1px",
    ":hover": {
      filter: "brightness(1.1)",
    },
  }),
  skillItemSelected: style({
    filter: "brightness(1.15)",
    ":hover": {
      cursor: "default",
    },
  }),
};

export const skillContainerStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
  cardAndListSection: style({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "@media": {
      [mediaQueries.SCREEN_SM]: {
        flexDirection: "row",
      },
      [mediaQueries.SCREEN_2XL]: {
        flexDirection: "column",
      },
      [mediaQueries.SCREEN_5XL]: {
        flexDirection: "row",
      },
    },
  }),
  cardSection: style({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    minWidth: "325px",
  }),
  desktopSkillListSection: style({
    display: "flex",
    marginTop: "2.5rem",
    justifyContent: "center",
    width: "100%",
  }),
};
