import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Header } from '../Header';
import { MobileMenu } from '@/components/MobileMenu';

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <>
      <Header />
      <main>
        <MobileMenu />
        <Outlet />
      </main>
    </>
  );
};
