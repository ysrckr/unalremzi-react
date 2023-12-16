
import { MainLayout } from './Layouts/MainLayout';
import { Home } from '@pages/Home';
import { RootRoute, Route, Router } from '@tanstack/react-router';


const rootRoute = new RootRoute({
  component: MainLayout,
});


const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});



const routeTree = rootRoute.addChildren([
  indexRoute,
]);

export const router = new Router({ routeTree });

