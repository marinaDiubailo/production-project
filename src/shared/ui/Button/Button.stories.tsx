import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';

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
        theme: ThemeButton.CLEAR,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.OUTLINE,
    },
};

export const ClearInverted: Story = {
    args: {
        children: 'TEXT',
        theme: ThemeButton.CLEAR_INVERTED,
    },
};
