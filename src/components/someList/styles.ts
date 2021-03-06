import { makeStyles } from '@material-ui/core';
import colors from 'styles/colors';

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: colors.base0,
  },
  title: {
    padding: '12px 16px',
  },
  news: {
    margin: 0,
    padding: 0,
  },
  itemWr: {
    textDecoration: 'none',
    color: colors.black,
  },
  item: {
    padding: 16,
    margin: 0,
    fontSize: 14,
    fontWeight: 500,
    listStyle: 'none',
    borderTop: `1px solid ${colors.base10}`,
    '&:hover': {
      backgroundColor: colors.white,
      transition: 0.3,
      color: colors.primary,
      cursor: 'pointer',
    },
  },
  itemText: {
    margin: 0,
  },
  itemComment: {
    display: 'block',
    color: colors.grey,
    paddingTop: 4,
    fontSize: 12,
  },
  newLabel: {
    display: 'inline-block',
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 8,
    padding: '2px 6px',
    marginTop: 4,
  },
}));
