import type { PropsWithChildren } from 'react';
import { Container, createTheme, Input, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

export const theme = createTheme({
    primaryColor: 'yellow',
    spacing: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
    },
    fontSizes: {
        xxs: '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        '2xl': '28px',
        '3xl': '32px',
        '4xl': '40px',
    },
    headings: {
        fontFamily: 'Nunito',
        fontWeight: '800',
    },
    components: {
        Input: Input.extend({
            styles: {
                input: {
                    border: 0,
                },
            },
        }),
        Container: Container.extend({
            vars: () => ({
                root: {
                    '--container-size': '1024px',
                },
            }),
        }),
    },
});

export function ThemeProvider({ children }: PropsWithChildren) {
    return (
        <MantineProvider theme={theme}>
            <Notifications />
            {children}
        </MantineProvider>
    );
}
