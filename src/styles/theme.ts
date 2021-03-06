import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#4791db',
    },
    secondary: {
      main: '#e33371',
      light: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 600,
    },
    h2: {
      fontSize: 22,
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
    },
    h4: {
      fontSize: 18,
      fontWeight: 600,
    },
    h5: {
      fontSize: 16,
      fontWeight: 600,
    },
    h6: {
      fontSize: 14,
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 500,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

export default theme;
