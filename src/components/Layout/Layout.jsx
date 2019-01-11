import React, { Component } from 'react';
/*
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
*/

import Header from '../Header/Header';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import resume from '../../assets/docs/Jon-Varner-resume.pdf';

import './Layout.module.scss';

class Layout extends Component {
  state = {
    links: [
      { url: 'http://www.squidinsquidink.com', text: 'music' },
      { url: resume, text: 'resume' },
      { url: 'https://github.com/Jon-Varner/', text: 'github' },
      { url: 'https://www.linkedin.com/in/jon-varner/', text: 'linkedin' },
      { url: 'http://www.instagram.com/squidinsquidink', text: 'instagram' },
      { url: 'http://www.twitter.com/jonvarner/', text: 'twitter' },
    ],
  };

  render() {
    return (
      <article>
        <Header />
        <main>
          <nav>
            <NavigationItems links={this.state.links} />
          </nav>
        </main>
      </article>
    );
  }
}

export default Layout;
