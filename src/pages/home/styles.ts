import { makeStyles } from '@material-ui/core';
import colors from 'styles/colors';

export const useStyles = makeStyles(() => ({
  home: {
    width: '100%',
    height: 'auto',
    backgroundColor: colors.base10,
    fontFamily: 'Montserrat',
  },
  homeWr: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1280,
    padding: 16,
    display: 'grid',
    gridTemplateColumns: 'minmax(215px, 280px) 1fr minmax(240px, 280px)',
    gridGap: 16,
  },
  sidebarWrLeft: {
    maxWidth: 265,
  },
  mainWr: {
    width: '100%',
  },
  sidebarWrRight: {
    maxWidth: 245,
  },
}));
