import { FC, useEffect } from 'react';

import { MobileMenu } from '@/components/MobileMenu';
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

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <AnimatePresence initial={false} mode="wait">
          {isMobileMenuOpen && <MobileMenu />}
        </AnimatePresence>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
