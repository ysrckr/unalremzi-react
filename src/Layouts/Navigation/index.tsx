import type { FC } from 'react';
import { navigationItems } from '../../data/navigationItems';

import { NavigationItem } from '../NavigationItem';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav>
      <ul>
        {navigationItems.map(({ url, label }) => (
          <NavigationItem key={url} url={url} label={label} />
        ))}
      </ul>
    </nav>
  );
};
