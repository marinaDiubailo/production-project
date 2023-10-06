/* eslint-disable indent */
import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme): Decorator =>
    (Story) =>
        (
            <ThemeProvider initialTheme={theme}>
                <div
                    className={`app ${theme}`}
                    style={{
                        color: 'var(--primary-color)',
                    }}
                >
                    <Story />
                </div>
            </ThemeProvider>
        );
