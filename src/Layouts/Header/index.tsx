import { UIStore, toggleMobileMenu } from '@/stores/UIStore';
import { FC, useEffect, useState } from 'react';

import { CompanyLogo } from '@/components/CompanyLogo';
import { Navigation } from '@/components/Navigation';
import { companyLogo } from '@/utils/constants';
import { motion } from 'framer-motion';
import { Squeeze as Hamburger } from 'hamburger-react';
import { useSnapshot } from 'valtio';
import styles from './header.module.scss';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);
  const [scrollTop, setScrollTop] = useState(() => document.documentElement.scrollTop);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <Hamburger toggled={isMobileMenuOpen} toggle={toggleMobileMenu} rounded />
      </div>
    </motion.header>
  );
};
