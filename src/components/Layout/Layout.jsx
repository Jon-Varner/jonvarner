import React, { Component } from 'react';
import uuid from 'uuid';

import Aux from '../../hoc/Auxiliary';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import resume from '../../assets/docs/Jon-Varner-resume.pdf';

class Layout extends Component {
  state = {
    links: [
      {
        id: uuid(),
        url: resume,
        text: 'resume',
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
        url: 'http://www.squidinsquidink.com',
        text: 'music',
      },
    ],
  };

  render() {
    const { links } = this.state;

    return (
      <Aux>
        <Header />
        <Navigation links={links} />
      </Aux>
    );
  }
}

export default Layout;
