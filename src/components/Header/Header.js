import React from 'react';

import { ProgressiveImage } from '../ProgressiveImage/ProgressiveImage';
import bannerImagePreview from '../../assets/images/puget-preview.jpg';
import bannerImage from '../../assets/images/puget-compressed.jpg';

export const Header = () => (
  <header>
    <div className="site-header">
      <h1>Jon Varner</h1>
      <h2>A Web developer in Seattle</h2>
    </div>
    <ProgressiveImage
      src={bannerImage}
      preview={bannerImagePreview}
      alt="A photo of Lighthouse Point at Deception Pass State Park"
    />
  </header>
);
