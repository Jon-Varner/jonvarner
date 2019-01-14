import React from 'react';

import bannerImage from '../../assets/images/puget-compressed.jpg';
import styles from './Header.module.scss';

const header = () => (
  <header className={styles.banner}>
    <div className={styles.siteHeader}>
      <h1 className={styles.title}>Jon Varner</h1>
      <p className={styles.subtitle}>A Web developer in Seattle</p>
    </div>
    <img src={bannerImage} alt="banner" />
  </header>
);

export default header;
