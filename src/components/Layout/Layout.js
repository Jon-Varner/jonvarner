import React, { Fragment } from 'react';
import uuid from 'uuid';

import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import resume from '../../assets/docs/Jon-Varner-resume.pdf';

export const Layout = props => {
  const links = [
    {
      id: uuid(),
      url: 'http://www.squidinsquidink.com',
      text: 'music',
    },
    {
      id: uuid(),
      url: 'http://www.instagram.com/squidinsquidink',
      text: 'instagram',
    },
    {
      id: uuid(),
      url: 'http://www.twitter.com/jonvarner/',
      text: 'twitter',
    },
    {
      id: uuid(),
      url: 'https://github.com/Jon-Varner/',
      text: 'github',
    },
    {
      id: uuid(),
      url: 'https://www.linkedin.com/in/jon-varner/',
      text: 'linkedin',
    },
    {
      id: uuid(),
      url: resume,
      text: 'resume',
    },
  ];

  return (
    <Fragment>
      <Header />
      <Navigation links={links} />
    </Fragment>
  );
};
