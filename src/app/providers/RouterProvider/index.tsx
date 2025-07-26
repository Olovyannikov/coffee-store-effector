import { RouterProvider as ReactRouterProvider } from 'react-router/dom';

import { routerConfig } from './config';

export function RouterProvider() {
    return <ReactRouterProvider router={routerConfig} />;
}
