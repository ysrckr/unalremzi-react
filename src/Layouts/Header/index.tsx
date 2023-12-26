import { UIStore, toggleMobileMenu } from '@/stores/UIStore';

import { CompanyLogo } from '@/components/CompanyLogo';
import { Navigation } from '@/components/Navigation';
import { companyLogo } from '@/utils/constants';
import { motion } from 'framer-motion';
import { Squeeze as Hamburger } from 'hamburger-react';
import { FC } from 'react';
import { useSnapshot } from 'valtio';
import styles from './header.module.scss';

interface HeaderProps {
  scrollTop: number;
}

export const Header: FC<HeaderProps> = ({ scrollTop }) => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);

  const alpha = 1 - scrollTop / 1400;

  return (
    <motion.header
      className={styles.header}
      style={{
        backgroundColor: `hsla(227, 55%, 22%, ${alpha})`,
        backdropFilter: scrollTop > 0 ? 'blur(10px)' : 'blur(0px)',
      }}
    >
      <CompanyLogo src={companyLogo} />
      <Navigation device="desktop" />
      <div className={styles.hamburger}>
        <Hamburger
          toggled={isMobileMenuOpen}
          toggle={toggleMobileMenu}
          rounded
        />
      </div>
    </motion.header>
  );
};
