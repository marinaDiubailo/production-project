import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AdminPanelPage from './AdminPanelPage';

const meta = {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Light: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {},
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
