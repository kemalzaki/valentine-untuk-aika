import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import ValentineMessage from './pages/ValentineMessage';
import PuzzleMinigame from './pages/PuzzleMinigame';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const messageRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/message',
  component: ValentineMessage,
});

const puzzleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/puzzle',
  component: PuzzleMinigame,
});

const routeTree = rootRoute.addChildren([homeRoute, messageRoute, puzzleRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
