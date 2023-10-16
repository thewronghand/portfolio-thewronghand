import { style } from "@vanilla-extract/css";
import { mediaQueries } from "../../../styles/mediaQueries";

export const contactsContainerStyle = {
  container: style({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20rem",
    paddingLeft: "0.5rem",
  }),
  title: style({
    fontSize: "3rem",
    width: "100%",
    marginBottom: "2.5rem",
    borderBottomWidth: "2px",
    borderColor: "currentcolor",
    paddingBottom: "1.25rem",
    cursor: "default",
  }),
  listSection: style({
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    width: "100%",
  }),
  list: style({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  }),
};

export const listItemStyle = {
  container: style({
    display: "flex",
    alignItems: "center",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  }),
  title: style({
    paddingTop: "1rem",
    paddingBottom: "1rem",
    paddingRight: "0.5rem",
    marginRight: "0.5rem",
    borderRight: "2px solid currentcolor",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
    cursor: "default",
    minWidth: "102px",
  }),
  itemSection: style({
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    minWidth: "206px",
  }),
  motionDiv: style({
    display: "flex",
    alignItems: "center",
  }),
  arrow: style({
    position: "absolute",
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
    color: "currentcolor",
    left: "-1.5rem",
  }),
  text: style({
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    "@media": {
      [mediaQueries.SCREEN_LG]: { fontSize: "1.25rem", lineHeight: "1.75rem" },
    },
  }),
  misc: {
    container: style({
      display: "flex",
      marginLeft: "0.5rem",
      marginRight: "0.5rem",
      alignItems: "center",
    }),
    title: style({
      paddingTop: "1rem",
      paddingBottom: "1rem",
      paddingRight: "0.5rem",
      minWidth: "102px",
      marginRight: "0.5rem",
      borderRight: "2px solid currentcolor",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      cursor: "default",
    }),
    itemSection: style({
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      minWidth: "206px",
    }),
  },
};

export const contactsItemStyle = {
  misc: {
    list: style({
      display: "flex",
      listStyle: "none",
      padding: 0,
    }),
    item: style({
      width: "2rem",
      height: "2rem",
      marginLeft: "2px",
      transitionProperty: "all",
      transitionTimingFunction: [
        "cubic-bezier(0.4, 0, 0.2, 1)",
        "cubic-bezier(0.4, 0, 0.2, 1)",
      ],
      transitionDuration: "300ms",
      ":hover": { transform: "translateY(-0.25rem)" },
      ":active": { transform: "translateY(0)" },
    }),
    img: style({
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }),
  },
};
