import React from 'react';

import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import bannerImagePreview from '../../assets/images/puget-preview.jpg';
import bannerImage from '../../assets/images/puget-compressed.jpg';

const header = () => (
  <header className="banner">
    <div className="site-header">
      <h1 className="title">Jon Varner</h1>
      <p className="subtitle">A Web developer in Seattle</p>
    </div>
    <ProgressiveImage
      src={bannerImage}
      preview={bannerImagePreview}
      alt="banner"
    />
  </header>
);

export default header;
