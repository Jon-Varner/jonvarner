import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.scss';

const navigationItems = props => (
  <ul className={classes.navigationItems}>
    {props.links.map((link, index) => {
      return <NavigationItem key={index} link={link.url} text={link.text} />;
    })}
  </ul>
);

export default navigationItems;
