import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'ui/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
    args: {
        title: 'Title',
        text: 'text',
    },
};

export const Dark: Story = {
    args: {
        title: 'Title',
        text: 'text',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle: Story = {
    args: {
        title: 'Title',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'text',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'Title',
        text: 'text',
        theme: TextTheme.ERROR,
    },
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
