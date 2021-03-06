import React, {
  memo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {
  Paper,
  Typography,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { AuthActions } from 'store/actions/auth';
import { t } from 'utils/locales/locale';
import { BaseInput } from 'components/inputs';
import { ENTER_CODE } from './declarations';
import { useStyles } from './styles';

const Auth: React.FC = (): React.ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isFocus, setIsFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const type = 'login';

  const onClick = () => {
    setIsFocus(true);
  };

  const login = useCallback(
    () => {
      dispatch(AuthActions.loginRequest({ email, password }));
    },
    [dispatch, email, password],
  );

  const handlerKeypress = useCallback(
    (event: KeyboardEvent) => {
      if (event.charCode === ENTER_CODE && isFocus && email && password) {
        login();
      }
    }, [email, password, isFocus, login],
  );

  const onBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    document.addEventListener('keypress', (e) => handlerKeypress(e));

    return () => document.removeEventListener('keypress', handlerKeypress);
  }, [email, password, handlerKeypress]);

  return (
    <div className={classes.auth}>
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
            onClick={onClick}
            onBlur={onBlur}
            onChange={(e) => setEmail(e.target.value)}
            inputClass={classes.rootInput}
          />
        </div>
        <div className={classes.inputWr}>
          <BaseInput
            label={t('loginPassword')}
            value={password}
            onClick={onClick}
            onBlur={onBlur}
            onChange={(e) => setPassword(e.target.value)}
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
