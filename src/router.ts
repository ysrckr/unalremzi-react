
import { MainLayout } from './Layouts/MainLayout';
import { Home } from './Pages/Home';
import { RootRoute, Route, Router } from '@tanstack/react-router';


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
  path: 'contact-us',
  component: Home,
});

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'products',
  component: Home,
});




const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
  productsRoute,
]);

export const router = new Router({ routeTree });

