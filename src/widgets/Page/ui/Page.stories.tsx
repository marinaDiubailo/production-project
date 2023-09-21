/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Page } from './Page';

const meta = {
    title: 'widget/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Light: Story = {
    args: {
        children: <div>Page</div>,
    },
};

export const Dark: Story = {
    args: {
        children: <div>Page</div>,
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        children: <div>Page</div>,
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
