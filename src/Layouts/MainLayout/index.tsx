import { FC, useEffect, useState } from 'react';

import { MobileMenu } from '@/components/MobileMenu';
import { ScrollBar } from '@/components/ScrollBar';
import { UIStore } from '@/stores/UIStore';
import { Outlet } from '@tanstack/react-router';
import { AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './mainLayout.module.scss';

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  const { isMobileMenuOpen, lang } = useSnapshot(UIStore);
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

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Header scrollTop={scrollTop} />
      <main className={styles.main}>
        <AnimatePresence initial={false} mode="wait">
          {isMobileMenuOpen && <MobileMenu />}
        </AnimatePresence>
        <ScrollBar scrollTop={scrollTop} />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
