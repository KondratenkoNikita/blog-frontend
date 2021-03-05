import { makeStyles } from '@material-ui/core';
import colors from 'styles/colors';

// @ts-ignore
export const useStyles = makeStyles(() => ({
  sidebarNav: {
    margin: 0,
    padding: '0 0 0 8px',
  },
  item: {
    color: colors.black,
    textDecoration: 'none',
    '&:hover': {
      color: colors.primary,
      transition: 0.3,
    },
  },
  li: {
    display: 'flex',
    fontSize: 14,
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
    '& > svg ': {
      fontSize: 20,
    },
  },
}));
