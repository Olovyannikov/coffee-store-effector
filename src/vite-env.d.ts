/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import 'react';

declare module 'react' {
    interface CSSProperties {
        [varName: `--${string}`]: string | number | undefined;
    }
}
