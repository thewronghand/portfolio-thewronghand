import { style } from "@vanilla-extract/css";
import { mediaQueries } from "../../styles/mediaQueries";

export const projectImageListStyle = {
  container: style({ paddingBottom: "8rem" }),
  title: style({
    paddingBottom: "0.5rem",
    paddingTop: "1rem",
    marginBottom: "1rem",
    borderBottom: "2px solid currentcolor",
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  }),
  imageList: style({ paddingLeft: "1.5rem", paddingRight: "1.5rem" }),
  imageListItem: style({
    overflow: "hidden",
    marginTop: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.75rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  }),
  image: style({
    objectFit: "cover",
    width: "100%",
  }),
};

export const projectInfoContainerStyle = {
  info: {
    title: style({
      paddingBottom: "1rem",
      paddingTop: "1.5rem",
      marginBottom: "1rem",
      borderBottom: "2px solid currentcolor",
      fontSize: "1.875rem",
      lineHeight: "2.25rem",
      cursor: "default",
    }),
    type: style({
      paddingRight: "0.5rem",
      marginBottom: "0.5rem",
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      textAlign: "right",
      cursor: "default",
    }),
    description: style({ paddingBottom: "0.5rem" }),
    stackList: style({
      display: "flex",
      marginBottom: "0.5rem",
      flexWrap: "wrap",
      alignContent: "flex-start",
      listStyle: "none",
      paddingLeft: 0,
    }),
    stackListItem: style({
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      marginRight: "0.25rem",
      marginTop: "0.5rem",
      borderRadius: "1rem",
      color: "#ffffff",
      cursor: "default",
    }),
  },
  docs: {
    container: style({
      display: "flex",
    }),
    title: style({
      marginRight: "0.5rem",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      cursor: "default",
    }),
    list: style({
      marginLeft: "1.5rem",
      listStyleType: "disc",
      paddingTop: "2px",
      paddingLeft: 0,
    }),
    listItem: style({
      ":hover": {
        filter: "invert(1.1)",
      },
    }),
  },
  links: {
    container: style({
      display: "flex",
      marginTop: "0.25rem",
      alignItems: "center",
    }),
    title: style({
      marginRight: "0.5rem",
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      cursor: "default",
    }),
    list: style({
      display: "flex",
      listStyle: "none",
      paddingLeft: "0.5rem",
      paddingRight: "0.5rem",
    }),
    listItem: style({
      paddingTop: "0.25rem",
      paddingBottom: "0.25rem",
      paddingLeft: "0.75rem",
      paddingRight: "0.75rem",
      marginRight: "0.25rem",
      borderRadius: "1rem",
      color: "#ffffff",
      ":hover": { filter: "brightness(1.1)" },
    }),
    nextProject: {
      container: style({
        display: "flex",
        marginTop: "1.5rem",
        justifyContent: "flex-end",
        alignItems: "center",
      }),
      title: style({
        marginRight: "1rem",
        fontSize: "1.5rem",
        lineHeight: "2rem",
      }),
      link: style({
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        ":hover": { filter: "brightness(1.1)", transform: "translateY(-1px)" },
      }),
    },
  },
};

export const projectThumbnailStyle = {
  container: style({
    aspectRatio: "auto",
    display: "flex",
    padding: "2.5rem",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1rem",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  }),
  logo: style({
    "@media": {
      [mediaQueries.SCREEN_SM]: {
        width: "60%",
      },
      [mediaQueries.SCREEN_MD]: {
        width: "40%",
      },
    },
  }),
};
