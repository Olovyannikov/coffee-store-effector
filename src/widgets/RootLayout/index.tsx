import type { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';

import s from './RootLayout.module.css';

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
