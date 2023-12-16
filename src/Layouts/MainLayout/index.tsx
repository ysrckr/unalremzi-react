import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Header } from '../Header';
import { MobileMenu } from '@/components/MobileMenu';
import { useSnapshot } from 'valtio';
import { UIStore } from '@/stores/UIStore';

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  const { isMobileMenuOpen } = useSnapshot(UIStore);

  return (
    <>
      <Header />
      <main>{isMobileMenuOpen ? <MobileMenu /> : <Outlet />}</main>
    </>
  );
};
