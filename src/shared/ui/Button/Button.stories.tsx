import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'ui/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.OUTLINE,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const Disabled: Story = {
    args: {
        children: 'TEXT',
        theme: ButtonTheme.CLEAR_INVERTED,
        disabled: true,
    },
};
