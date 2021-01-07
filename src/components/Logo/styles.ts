import { makeStyles } from '@material-ui/core/styles';
import colors from 'styles/colors';

export const useStyles = makeStyles({
  logo: {
    backgroundColor: colors.black,
    borderRadius: 5,
    height: 34,
  },
  logoText: {
    color: colors.white,
    padding: '8px',
    fontWeight: 500,
    margin: 0,
  },
});
