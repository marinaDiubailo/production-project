/* eslint-disable indent */
import { Decorator } from '@storybook/react';
// eslint-disable-next-line eslint-correct-paths-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

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
