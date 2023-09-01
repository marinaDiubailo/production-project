import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'Storybook Storybook',
            password: '123456789',
        },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'Storybook Storybook',
            password: '123456789',
        },
    }),
];

export const WithError: Story = {
    args: {},
};
WithError.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'Storybook Storybook',
            password: '123456789',
            error: 'an error occured',
        },
    }),
];

export const Loading: Story = {
    args: {},
};
Loading.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
