import { AnimatePresence } from 'framer-motion';
import { FC } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { MobileMenu } from '@/components/MobileMenu';
import { Outlet } from '@tanstack/react-router';
import { UIStore } from '@/stores/UIStore';
import styles from './mainLayout.module.scss';
import { useSnapshot } from 'valtio';

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);

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
