import type { FC } from 'react';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};
