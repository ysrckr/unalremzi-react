import { CompanyLogo } from '@/components/CompanyLogo';
import { FC } from 'react';
import { Navigation } from '../../components/Navigation';
import { Squeeze as Hamburger } from 'hamburger-react';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header>
      <CompanyLogo src="/images/logo.webp" />
      <Navigation device="desktop" />
      <Hamburger />
    </header>
  );
};
