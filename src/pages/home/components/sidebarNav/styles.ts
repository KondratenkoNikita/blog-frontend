import { makeStyles } from '@material-ui/core';
import colors from 'styles/colors';

export const useStyles = makeStyles(() => ({
  sidebarNav: {
    margin: '16px 0 0 0',
    padding: 0,
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
