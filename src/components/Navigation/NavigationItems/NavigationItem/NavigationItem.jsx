import React from 'react';

import classes from './NavigationItem.module.scss';

const navigationItem = props => (
  <li className={classes.navigationItem}>
    <a href={props.link}>{props.text}</a>
  </li>
);

export default navigationItem;
