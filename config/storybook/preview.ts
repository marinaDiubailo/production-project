import type { Preview } from '@storybook/react';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/shared/const/theme';
import i18n from '../../src/shared/config/i18n/i18n';

initialize();

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        i18n,
        layout: 'fullscreen',
        themes: {
            default: 'light',
            list: [
                { name: 'light', class: Theme.LIGHT, color: '#f9f4fb' },
                { name: 'dark', class: Theme.DARK, color: '#3e184d' },
                { name: 'orange', class: Theme.ORANGE, color: '#fbf7f4' },
            ],
        },
    },
    decorators: [
        mswDecorator,
        RouterDecorator,
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        SuspenseDecorator,
    ],
};

export default preview;
