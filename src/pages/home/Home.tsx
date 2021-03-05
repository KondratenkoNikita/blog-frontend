import React, { memo, useState } from 'react';
import SidebarNav from './components/sidebarNav';
import { useStyles } from './styles';

const Home: React.FC = (): React.ReactElement => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <div className={classes.homeWr}>
        <div className={classes.sidebarWrLeft}>
          <SidebarNav />
        </div>
        <main className={classes.mainWr}>
          test
        </main>
        <div className={classes.sidebarWrLeft}>
          test
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
