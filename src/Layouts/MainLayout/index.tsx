import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Header } from '../Header';
import { MobileMenu } from '@/components/MobileMenu';
import { useSnapshot } from 'valtio';
import { UIStore } from '@/stores/UIStore';
import { AnimatePresence } from 'framer-motion';
import styles from './mainLayout.module.scss';
import { Footer } from '../Footer';

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);

  return (
    <AnimatePresence initial={false} mode="wait">
      <Header />
      <main className={styles.main}>{isMobileMenuOpen ? <MobileMenu /> : <Outlet />}</main>
      <Footer />
    </AnimatePresence>
  );
};
