import type { FC } from 'react';
import { navigationItems } from '@/data/navigationItems';
import styles from './navigation.module.scss';
import { NavigationItem } from '../NavigationItem';

interface NavigationProps {
  device: 'mobile' | 'desktop';
}

export const Navigation: FC<NavigationProps> = ({ device }) => {
  return (
    <nav className={styles[`${device}-navigation`]}>
      <ul className={styles[`${device}-navigationList`]}>
        {navigationItems.map(({ url, label }) => (
          <NavigationItem key={url} url={url} label={label} />
        ))}
      </ul>
    </nav>
  );
};
