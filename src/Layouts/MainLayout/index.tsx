import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { Header } from '@components/Header';

interface MainLayoutProps {}

export const MainLayout: FC<MainLayoutProps> = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
