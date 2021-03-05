import { makeStyles } from '@material-ui/core';
import colors from 'styles/colors';

export const useStyles = makeStyles({
  root: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: 'transparent',
  },
  regular: {
    minHeight: 54,
  },
  wr: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 1280,
    margin: '0 auto',
  },
  rootCreate: {
    color: colors.white,
    textTransform: 'capitalize',
    fontWeight: 600,
    backgroundColor: colors.primary,
  },
  rootLogin: {
    color: colors.primary,
    marginRight: 10,
    textTransform: 'capitalize',
    fontWeight: 600,
  },
});
