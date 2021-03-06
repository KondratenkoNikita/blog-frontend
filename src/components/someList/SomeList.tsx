import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { t } from 'utils/locales/locale';
import { SomeListType } from './declarations';
import { useStyles } from './styles';

const API = 'http://localhost:3000';

const SomeList: React.FC<SomeListType> = ({
  list = [],
  listName,
  pageName,
}: SomeListType): React.ReactElement => {
  const classes = useStyles() as Record<string, string>;

  return (
    <div>
      <Paper elevation={0} classes={{ root: classes.root }}>
        <Typography variant="h5" className={classes.title}>
          #
          {t(listName)}
        </Typography>
        <ul className={classes.news}>
          {!!list.length && (
            list.map(({
              id,
              text,
              isNew = false,
              commentsNumber = 0,
            }) => (
              <Link to={`${API}/${pageName}/${id}`} className={classes.itemWr}>
                <li className={classes.item} key={id}>
                  <p className={classes.itemText}>{text}</p>
                  {commentsNumber > 0 && (
                    <span className={classes.itemComment}>
                      {commentsNumber}
                      {commentsNumber > 1 ? ' comments' : ' comment'}
                    </span>
                  )}
                  {isNew && (
                    <span className={classes.newLabel}>New</span>
                  )}
                </li>
              </Link>
            ))
          )}
        </ul>
      </Paper>
    </div>
  );
};

export default SomeList;
