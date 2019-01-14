import React, { Component } from 'react';
// eslint-disable-next-line
import { TimelineMax, TweenLite, CSSPlugin } from 'gsap/all';

import classes from './Navigation.module.scss';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.navItems = [];
  }
  componentDidMount() {
    const tl = new TimelineMax();
    tl.staggerFrom(this.navItems, 1, { opacity: 0 }, 0.2);
  }

  render() {
    const links = this.props.links;

    return (
      <div>
        <ul className={classes.navigationItems}>
          {links.map((links, index) => (
            <li
              className={classes.navigationItem}
              key={links.id}
              ref={li => (this.navItems[index] = li)}
            >
              <a href={links.url}>{links.text}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Navigation;
