import { makeStyles, Theme } from '@material-ui/core';

export const useStyles = makeStyles((theme: Theme) => ({
  login: {
    display: 'flex',
    maxWidth: 500,
    margin: '0 auto',
    height: 'calc(100vh - 64px)',
    position: 'relative',
  },
  rootInput: {
    height: 50,
    padding: 8,
    borderRadius: 4,
    width: '100%',
    border: `2px solid ${theme.palette.primary.light}`,
  },
  rootPaper: {
    width: '100%',
    padding: '60px 40px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
