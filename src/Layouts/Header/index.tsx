import { CompanyLogo } from '@/components/CompanyLogo';
import { FC, Fragment } from 'react';
import { Navigation } from '../../components/Navigation';
import { Squeeze as Hamburger } from 'hamburger-react';
import styles from './header.module.scss';
import { useSnapshot } from 'valtio';
import { UIStore } from '@/stores/UIStore';
import { toggleMobileMenu } from '@/stores/UIStore';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);
  return (
    <header className={styles.header}>
      <CompanyLogo src="/images/logo.webp" />
      <Navigation device="desktop" />
      <div className={styles.hamburger}>
        <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu} rounded />
      </div>
    </header>
  );
};
