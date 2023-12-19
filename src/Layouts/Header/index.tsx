import { UIStore, toggleMobileMenu } from '@/stores/UIStore';

import { CompanyLogo } from '@/components/CompanyLogo';
import { FC } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Navigation } from '@/components/Navigation';
import { companyLogo } from '@/utils/constants';
import styles from './header.module.scss';
import { useSnapshot } from 'valtio';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);

  return (
    <header className={styles.header}>
      <CompanyLogo src={companyLogo} />
      <Navigation device="desktop" />
      <div className={styles.hamburger}>
        <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu} rounded />
      </div>
    </header>
  );
};
