import React from 'react';

import ProgressiveImage from '../ProgressiveImage/ProgressiveImage';
import bannerImagePreview from '../../assets/images/puget-preview.jpg';
import bannerImage from '../../assets/images/puget-compressed.jpg';

const header = () => (
  <header>
    <div className="site-header">
      <h1>Jon Varner</h1>
      <h2>A Web developer in Seattle</h2>
    </div>
    <ProgressiveImage
      src={bannerImage}
      preview={bannerImagePreview}
      alt="banner"
    />
  </header>
);

export default header;
