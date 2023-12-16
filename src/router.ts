import { RootRoute, Route, Router } from '@tanstack/react-router';

import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Home } from './Pages/Home';
import { MainLayout } from './Layouts/MainLayout';
import { Products } from './Pages/Products';

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
  component: About,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'contact',
  component: Contact,
});

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'products',
  component: Products,
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, contactRoute, productsRoute]);

export const router = new Router({ routeTree });
