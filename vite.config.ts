import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { compression } from 'vite-plugin-compression2';
import inspect from 'vite-plugin-inspect';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
    const isDev = mode === 'development';

    return {
        plugins: [
            inspect({
                build: true,
                outputDir: '.vite-inspect',
            }),
            react({
                plugins: [
                    [
                        '@effector/swc-plugin',
                        {
                            addNames: isDev,
                            addLoc: isDev,
                            hmr: isDev ? 'es' : false,
                            debugSids: isDev,
                            factories: ['./src/shared/factories', '@/shared/factories'],
                        },
                    ],
                ],
            }),
            svgr(),
            compression(),
        ],
        css: {
            modules: {
                generateScopedName: isDev ? '[folder]__[local]_[hash:base64:5]' : '[hash:base64:5]',
            },
        },
        ssr: {},
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
            },
        },
    };
});
