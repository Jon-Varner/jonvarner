import React, { Component } from 'react';
import { TimelineMax, TweenLite, CSSPlugin } from 'gsap/all';

import classes from './Navigation.module.scss';

/* The following lines are unfortunately required to get around tree shaking problems with GSAP */
// eslint-disable-next-line
const t = TweenLite;
// eslint-disable-next-line
const c = CSSPlugin;

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
      <nav>
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
      </nav>
    );
  }
}

export default Navigation;
