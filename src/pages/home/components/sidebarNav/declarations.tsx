import React from 'react';
import { SvgIconProps } from '@material-ui/core';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LockIcon from '@material-ui/icons/Lock';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Videocam from '@material-ui/icons/Videocam';
import MicIcon from '@material-ui/icons/Mic';
import LabelIcon from '@material-ui/icons/Label';
import { routes } from 'router/declarations';

interface MenuType {
  id: string;
  name: string;
  link: string;
  icon: SvgIconProps;
}

export const MENU: Array<MenuType> = [
  { id: '1', name: 'Home', link: routes.home, icon: <HomeRoundedIcon /> },
  { id: '2', name: 'Sign In/Up', link: routes.auth, icon: <LockIcon /> },
  { id: '3', name: 'Listing', link: routes.listing, icon: <MusicNoteIcon /> },
  { id: '4', name: 'Videos', link: routes.videos, icon: <Videocam /> },
  { id: '6', name: 'Podcast', link: routes.podcasts, icon: <MicIcon /> },
  { id: '5', name: 'Tags', link: routes.tags, icon: <LabelIcon /> },
];
