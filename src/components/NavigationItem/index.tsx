import { Link } from '@tanstack/react-router';
import type { FC } from 'react';
import type { NavigationItem as NavItem } from '../../data/navigationItems';

interface NavigationItemProps extends NavItem {}

export const NavigationItem: FC<NavigationItemProps> = ({ url, label }) => {
  return (
    <li>
      <Link to={url}>{label}</Link>
    </li>
  );
};
