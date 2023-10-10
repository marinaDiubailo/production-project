import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { SideBar } from './SideBar';

const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Light: Story = {
    args: {},
};
Light.decorators = [
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const Dark: Story = {
    args: {},
};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        user: { authData: {} },
    }),
];

export const NoAuth: Story = {
    args: {},
};
NoAuth.decorators = [
    StoreDecorator({
        user: {},
    }),
];
