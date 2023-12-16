import { RootRoute, Route, Router } from '@tanstack/react-router';

import { Home } from './Pages/Home';
import { MainLayout } from './Layouts/MainLayout';

const rootRoute = new RootRoute({
  component: MainLayout,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'about',
  component: Home,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Home,
});

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'products',
  component: Home,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute, productsRoute]);

export const router = new Router({ routeTree });
