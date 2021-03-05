import React from 'react';
import { Link } from 'react-router-dom';
import { MENU } from './declarations';
import { useStyles } from './styles';

const SidebarNav: React.FC = (): React.ReactElement => {
  const classes = useStyles() as Record<string, string>;
  return (
    <ul className={classes.sidebarNav}>
      {
        MENU.map(({ id, name, icon, link }) => (
          <Link to={link} className={classes.item}>
            <li key={id} className={classes.li}>
              <i className={classes.icon}>{icon}</i>
              {name}
            </li>
          </Link>
        ))
      }
    </ul>
  );
};

export default SidebarNav;
