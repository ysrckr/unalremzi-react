import type { FC } from 'react';
import { navigationItems } from '@/data/navigationItems';
import { Link } from '@tanstack/react-router';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav>
      <ul>
        {navigationItems.map(({ label, url }) => (
          <li key={url}>
            <Link
              to={url}
              params={function (_current: {}): never {
                throw new Error('Function not implemented.');
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
