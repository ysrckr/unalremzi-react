import { FC } from 'react';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

interface MainLayoutProps {
  title: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ title }) => {
  return (
    <>
      <main>
        <h1>{title}</h1>
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  );
};
