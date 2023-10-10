import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import AvatarImg from '@/shared/assets/tests/storybook.jpg';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    StoreDecorator({
        profile: {
            form: {
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
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
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
    }),
];
