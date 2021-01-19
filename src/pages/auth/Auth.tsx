import React, { memo, useState, useEffect } from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { AuthActions } from 'store/actions/auth';
import { t } from 'utils/locales/locale';
import { BaseInput } from 'components/inputs';
import { useStyles } from './styles';

const Auth: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const type = 'login';

  useEffect(() => {

  }, [email, password]);

  const login = () => {
    dispatch(AuthActions.login({ email, password }));
  };

  return (
    <div className={classes.login}>
      <Paper
        elevation={0}
        variant="outlined"
        classes={{ root: classes.rootPaper }}
      >
        <Typography variant="h2" classes={{ root: classes.rootH2 }}>
          {t('loginTitle')}
        </Typography>
        <div className={classes.inputWr}>
          <BaseInput
            label={t('loginEmail')}
            value={email}
            onChange={setEmail}
            inputClass={classes.rootInput}
          />
        </div>
        <div className={classes.inputWr}>
          <BaseInput
            label={t('loginPassword')}
            value={password}
            onChange={setPassword}
            inputClass={classes.rootInput}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={login}
          classes={{ root: classes.rootButton }}
        >
          {type === 'login' ? t('login') : t('loginCreateAccount')}
        </Button>
      </Paper>
    </div>
  );
};

export default memo(Auth);
