import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { PageLoader } from '@/shared/ui';

import { RouterProvider } from './providers/RouterProvider';
import { ThemeProvider } from './providers/ThemeProvider';

import './styles/style.css';

createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider>
        <Suspense fallback={<PageLoader />}>
            <RouterProvider />
        </Suspense>
    </ThemeProvider>
);
