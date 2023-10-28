import { style } from '@vanilla-extract/css';
import { youngSerifFont } from '../styles/fonts.css';
import { mediaQueries } from '../styles/mediaQueries';

export const mainStyle = {
  container: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    transitionProperty: 'all',
    transitionTimingFunction: [
      'cubic-bezier(0.4, 0, 0.2, 1)',
      'cubic-bezier(0.4, 0, 0.2, 1)',
    ],
    transitionDuration: ['300ms', '300ms'],
  }),
  intro: style({
    width: '60%',
    textAlign: 'center',
  }),
  usernameSpan: style({
    fontFamily: youngSerifFont,
    fontSize: '0.75rem',
    lineHeight: '1rem',
  }),
};

export const aboutStyle = {
  container: style({
    paddingTop: '2.5rem',
    minHeight: '100vh',
    transitionProperty: 'all',
    transitionTimingFunction: [
      'cubic-bezier(0.4, 0, 0.2, 1)',
      'cubic-bezier(0.4, 0, 0.2, 1)',
    ],
    transitionDuration: ['300ms', '300ms'],
    '@media': {
      [mediaQueries.SCREEN_XL]: { paddingTop: '0' },
    },
  }),
  main: style({
    display: 'flex',
    flexDirection: 'column-reverse',
    width: '100%',
    '@media': {
      [mediaQueries.SCREEN_MD]: { justifyContent: 'space-between' },
      [mediaQueries.SCREEN_XL]: { flexDirection: 'row' },
    },
  }),
  profileSection: style({
    display: 'flex',
    padding: '2.5rem',
    marginLeft: '0',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    '@media': {
      [mediaQueries.SCREEN_MD]: { marginLeft: '8rem', width: '66.666667%' },
      [mediaQueries.SCREEN_XL]: { width: '60%' },
      [mediaQueries.SCREEN_2XL]: { marginLeft: '24rem' },
    },
  }),
  skillsAndContactsSection: style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    '@media': {
      [mediaQueries.SCREEN_2XL]: {
        flexDirection: 'row',
      },
    },
  }),
  skillsAndContactsChildren: style({
    marginTop: '4rem',
    width: '100%',
    '@media': {
      [mediaQueries.SCREEN_2XL]: {
        width: '50%',
      },
    },
  }),
  profileImage: style({
    objectFit: 'cover',
    margin: '1.5rem',
    minWidth: '250px',
    borderRadius: '0.75rem',
    height: '60vh',
    '@media': {
      [mediaQueries.SCREEN_XL]: {
        margin: '0',
        borderBottomLeftRadius: '20%',
        width: '40%',
        height: '66.666667%',
      },
      [mediaQueries.SCREEN_2XL]: { width: '20%' },
    },
  }),
};

export const projectsStyle = {
  container: style({
    width: '100vw',
    height: '100vh',
    transitionProperty: 'all',
    transitionTimingFunction: [
      'cubic-bezier(0.4, 0, 0.2, 1)',
      'cubic-bezier(0.4, 0, 0.2, 1)',
    ],
    transitionDuration: ['300ms', '300ms'],
  }),
  main: style({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }),
};

export const projectDetailsStyle = {
  container: style({
    paddingTop: '4rem',
    width: '100%',
    height: '100%',
    minHeight: '100vh',
    transitionProperty: 'all',
    transitionTimingFunction: [
      'cubic-bezier(0.4, 0, 0.2, 1)',
      'cubic-bezier(0.4, 0, 0.2, 1)',
    ],
    transitionDuration: ['300ms', '300ms'],
  }),
  main: style({
    paddingLeft: '3.5rem',
    paddingRight: '3.5rem',
    '@media': {
      [mediaQueries.SCREEN_MD]: { paddingLeft: '7rem', paddingRight: '7rem' },
      [mediaQueries.SCREEN_LG]: { paddingLeft: '9rem', paddingRight: '9rem' },
      [mediaQueries.SCREEN_XL]: { paddingLeft: '12rem', paddingRight: '12rem' },
      [mediaQueries.SCREEN_2XL]: {
        paddingLeft: '14rem',
        paddingRight: '14rem',
      },
      [mediaQueries.SCREEN_3XL]: {
        paddingLeft: '16rem',
        paddingRight: '16rem',
      },
    },
  }),
  thumbnailSection: style({
    minHeight: '400px',
    '@media': {
      [mediaQueries.SCREEN_MD]: {
        minHeight: '360px',
        marginTop: '-5rem',
      },
    },
  }),
};

export const blogStyle = {
  container: style({
    width: '100vw',
    height: '100vh',
    paddingTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transitionProperty: 'all',
    transitionTimingFunction: [
      'cubic-bezier(0.4, 0, 0.2, 1)',
      'cubic-bezier(0.4, 0, 0.2, 1)',
    ],
    transitionDuration: ['300ms', '300ms'],
  }),
  iframeSection: style({
    background: '#ffffff',
    display: 'flex',
    margin: '2.5rem',
    justifyContent: 'center',
    width: '100%',
    height: '1000px',
    '@media': {
      [mediaQueries.SCREEN_MD]: { height: '650px' },
    },
  }),
  iframeContainer: style({
    width: '100%',
    maxWidth: '1000px',
    height: '100%',
    border: 'none',
  }),
  iframe: style({
    width: '100%',
    height: '100%',
    border: 'none',
  }),
};
