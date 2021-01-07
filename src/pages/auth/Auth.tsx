import React, { memo, useState } from 'react';
import {
  Paper,
  Input,
  Typography,
  Button,
} from '@material-ui/core';
import { useStyles } from './styles';

const Auth: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const type = 'login';

  return (
    <div className={classes.login}>
      <Paper
        elevation={0}
        variant="outlined"
        classes={{ root: classes.rootPaper }}
      >
        <Typography variant="h2" classes={{ root: classes.rootH2 }}>
          Welcome to DEVELOP_BLOG
        </Typography>
        <div className={classes.inputWr}>
          <Typography variant="subtitle1">
            Email
          </Typography>
          <Input
            disableUnderline
            error={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
            classes={{ root: classes.rootInput }}
          />
        </div>
        <div className={classes.inputWr}>
          <Typography variant="subtitle1">
            Password
          </Typography>
          <Input
            disableUnderline
            error={false}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            classes={{ root: classes.rootInput }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          classes={{ root: classes.rootButton }}
        >
          {type === 'login' ? 'Login' : 'Create account'}
        </Button>
      </Paper>
    </div>
  );
};

export default memo(Auth);
