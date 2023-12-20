import { navigationItems } from '@/data/navigationItems';
import type { FC } from 'react';
import { NavigationItem } from '../NavigationItem';
import styles from './navigation.module.scss';

interface NavigationProps {
  device: 'mobile' | 'desktop';
}

export const Navigation: FC<NavigationProps> = ({ device }) => {
  return (
    <nav className={styles[`${device}-navigation`]}>
      <ul className={styles[`${device}-navigationList`]}>
        {navigationItems.map(({ url, key }) => (
          <NavigationItem key={url} url={url} label={key} />
        ))}
      </ul>
    </nav>
  );
};
