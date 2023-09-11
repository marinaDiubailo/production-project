import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import AvatarImg from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Light: Story = {
    args: {
        data: {
            username: 'admin',
            age: 48,
            country: Country.Russia,
            currency: Currency.RUB,
            first: 'Ivan',
            last: 'Ivanov',
            city: 'Moscow',
            avatar: AvatarImg,
        },
    },
};

export const Dark: Story = {
    args: {
        data: {
            username: 'admin',
            age: 48,
            country: Country.Russia,
            currency: Currency.RUB,
            first: 'Ivan',
            last: 'Ivanov',
            city: 'Moscow',
            avatar: AvatarImg,
        },
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError: Story = {
    args: {
        error: 'An error occored',
    },
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};
