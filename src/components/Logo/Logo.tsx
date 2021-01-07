import React from 'react';
import { useStyles } from './styles';

const Logo: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <p className={classes.logoText}>DEVELOP_BLOG</p>
    </div>
  );
};

export default Logo;
