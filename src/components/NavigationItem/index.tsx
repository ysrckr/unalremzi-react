import type { FC } from 'react';
import { Link } from '@tanstack/react-router';
import type { NavigationItem as NavItem } from '@/data/navigationItems';
import styles from './navigationItem.module.scss';

interface NavigationItemProps extends NavItem {}

export const NavigationItem: FC<NavigationItemProps> = ({ url, label }) => {
  return (
    <li className={styles.item}>
      <Link to={url} className={styles.link}>
        {label}
      </Link>
    </li>
  );
};
