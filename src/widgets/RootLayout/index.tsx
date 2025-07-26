import type { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

import { appStarted } from '@/shared/services';

import s from './RootLayout.module.css';
appStarted();
export const RootLayout = ({ children, title = 'Главная' }: PropsWithChildren<{ title?: string }>) => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <div className={s.wrapper}>
            <main className={s.main}>{children}</main>
        </div>
    </>
);
