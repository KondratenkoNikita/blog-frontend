import React, { memo } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  useMediaQuery,
} from '@material-ui/core';
import Logo from 'components/Logo';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';

const NavBar: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const isMd = useMediaQuery('(min-width: 768px)');
  console.log(isMd);

  return (
    <div className={classes.navBar}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.container}>
            <div className={classes.wr}>
              {!isMd && (
                <IconButton edge="start" color="inherit">
                  <MenuIcon />
                </IconButton>
              )}
              <Logo />
            </div>
            <div>
              <Button
                color="inherit"
                classes={{ root: classes.rootLogin }}
              >
                Login
              </Button>
              <Button
                color="secondary"
                variant="contained"
              >
                Create account
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default memo(NavBar);
