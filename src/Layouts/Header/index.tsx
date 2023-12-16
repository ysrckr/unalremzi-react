import { CompanyLogo } from '@/components/CompanyLogo';
import { FC } from 'react';
import { Navigation } from '@/Layouts/Navigation';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <CompanyLogo src="/images/logo.webp" />
      <Navigation />
    </header>
  );
};
