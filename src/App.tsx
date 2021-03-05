import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import configureStore from 'store/store';
import Router from 'router/routes';
import NavBar from 'components/navBar';
import theme from 'styles/theme';

const storeState = configureStore({});

const App: React.FC = () => (
  <Provider store={storeState}>
    <ThemeProvider theme={theme}>
      <NavBar />
      <CssBaseline />
      <Router />
    </ThemeProvider>
  </Provider>
);

export default App;
