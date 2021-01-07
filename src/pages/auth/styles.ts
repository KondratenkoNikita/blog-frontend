import { makeStyles, withStyles, Theme } from '@material-ui/core';

export const StyledInput = withStyles({

});

export const useStyles = makeStyles((theme: Theme) => ({
  login: {
    display: 'flex',
    maxWidth: 500,
    margin: '0 auto',
  },
  rootInput: {
    height: 50,
    padding: 8,
    borderRadius: 4,
    width: '100%',
    border: `2px solid ${theme.palette.primary.light}`,
  },
  rootPaper: {
    margin: '150px 16px 0 16px',
    padding: '60px 40px',
    width: '100%',
  },
  inputWr: {
    marginBottom: 20,
  },
  rootButton: {
    marginTop: 10,
    height: 50,
  },
  rootH2: {
    margin: '0 0 30px 0',
  },
}));
