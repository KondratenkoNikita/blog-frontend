import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import Auth from 'pages/auth/Auth';
import NavBar from 'components/NavBar';
import theme from 'styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavBar />
    <CssBaseline />
    <Auth />
  </ThemeProvider>
);

export default App;
