import React from 'react';
import { Alert, AlertTitle } from '@material-ui/core';
import classes from '*.module.css';
import { NotificationType } from './declarations';
import { useStyles } from './styles';

export const Notification: React.FC<NotificationType> = ({
  text,
  type,
}): React.ReactElement<NotificationType> => {
  const classes = useStyles();

  return (
    <div className={classes.notificationWrapper}>
      <Alert severity={type.toLowerCase()}>
        {text}
      </Alert>
    </div>
  );
};

export default Notification;
