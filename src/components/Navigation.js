import React, { useEffect } from 'react';
import { TimelineMax, TweenLite, CSSPlugin } from 'gsap/all';

/* The following lines are unfortunately required to get around tree shaking problems with GSAP */
// eslint-disable-next-line
const t = TweenLite;
// eslint-disable-next-line
const c = CSSPlugin;

export const Navigation = ({ links }) => {
  const navItems = [];

  useEffect(() => {
    const tl = new TimelineMax();
    tl.staggerFrom(navItems, 1, { opacity: 0 }, 0.2);
  });

  return (
    <nav>
      <ul className="navigation-items">
        {links.map((links, index) => (
          <li
            className="navigation-item"
            key={links.id}
            ref={li => (navItems[index] = li)}
          >
            <a href={links.url}>{links.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
