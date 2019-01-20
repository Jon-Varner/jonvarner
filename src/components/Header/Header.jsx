import React from 'react';

import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import bannerImagePreview from '../../assets/images/puget-preview.jpg';
import bannerImage from '../../assets/images/puget-compressed.jpg';
import classes from './Header.module.scss';

const header = () => (
  <header className={classes.banner}>
    <div className={classes.siteHeader}>
      <h1 className={classes.title}>Jon Varner</h1>
      <p className={classes.subtitle}>A Web developer in Seattle</p>
    </div>
    <ProgressiveImage
      src={bannerImage}
      preview={bannerImagePreview}
      alt="banner"
    />
  </header>
);

export default header;
