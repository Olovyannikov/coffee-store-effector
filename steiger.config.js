import { defineConfig } from 'steiger';
import fsd from '@feature-sliced/steiger-plugin';

export default defineConfig([
    ...fsd.configs.recommended,
    {
        // disable the `public-api` rule for files in the Shared layer
        files: ['./src/**/*'],
        rules: {
            'fsd/segments-by-purpose': 'off',
            'fsd/no-segmentless-slices': 'off',
            'fsd/insignificant-slice': 'off',
        },
    },
    {
        files: ['src/entities/**'],
        rules: {
            'fsd/no-cross-imports': 'off',
            'fsd/forbidden-imports': 'off',
        },
    },
    {
        files: ['src/shared/assets**'],
        rules: {
            'fsd/no-layer-public-api': 'off',
        },
    },
]);