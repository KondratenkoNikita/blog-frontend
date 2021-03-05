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

  return (
    <div>
      <AppBar position="static" classes={{ root: classes.root }}>
        <Toolbar classes={{ regular: classes.regular, root: classes.root }}>
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
              <Button classes={{ root: classes.rootLogin }}>
                Log in
              </Button>
              <Button
                variant="contained"
                color="primary"
                classes={{ root: classes.rootCreate }}
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
