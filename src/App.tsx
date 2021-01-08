import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import configureStore from 'store/index';
import Auth from 'pages/auth/Auth';
import NavBar from 'components/NavBar';
import theme from 'styles/theme';

const storeState = configureStore({});

const App: React.FC = () => (
  <Provider store={storeState}>
    <ThemeProvider theme={theme}>
      <NavBar />
      <CssBaseline />
      <Auth />
    </ThemeProvider>
  </Provider>
);

export default App;
