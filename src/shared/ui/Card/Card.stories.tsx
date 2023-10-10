/* eslint-disable i18next/no-literal-string */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../Text/Text';
import { Card, CardTheme } from './Card';

const meta = {
    title: 'ui/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof Card>;

export const Light: Story = {
    args: {
        children: (
            <Text
                text='Hello, vorld!'
                title='HELLO'
            />
        ),
    },
};

export const Dark: Story = {
    args: {
        children: (
            <Text
                text='Hello, world!'
                title='HELLO'
            />
        ),
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange: Story = {
    args: {
        children: (
            <Text
                text='Hello, world!'
                title='HELLO'
            />
        ),
    },
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];

export const LightOutlined: Story = {
    args: {
        children: (
            <Text
                text='Hello, vorld!'
                title='HELLO'
            />
        ),
        theme: CardTheme.OUTLINED,
    },
};

export const DarkOutlined: Story = {
    args: {
        children: (
            <Text
                text='Hello, world!'
                title='HELLO'
            />
        ),
        theme: CardTheme.OUTLINED,
    },
};
DarkOutlined.decorators = [ThemeDecorator(Theme.DARK)];

export const OrangeOutlined: Story = {
    args: {
        children: (
            <Text
                text='Hello, world!'
                title='HELLO'
            />
        ),
        theme: CardTheme.OUTLINED,
    },
};
OrangeOutlined.decorators = [ThemeDecorator(Theme.ORANGE)];
