import { createBrowserRouter } from 'react-router';

import { ErrorPageLazy } from '@/pages/ErrorPage';
import { IndexPageLazy } from '@/pages/IndexPage';

export const AppRoutes = {
    ERROR: 'error',
    INDEX: 'index',
} as const;

type Keys = keyof typeof AppRoutes;
type AppRoute = (typeof AppRoutes)[Keys];

const RouterPaths: Record<AppRoute, string> = {
    [AppRoutes.INDEX]: '/',
    [AppRoutes.ERROR]: '*',
};

export const routerConfig = createBrowserRouter([
    {
        path: RouterPaths.error,
        element: <ErrorPageLazy />,
    },
    {
        path: RouterPaths.index,
        element: <IndexPageLazy />,
    },
]);
